import {
  createStackNavigator,
} from 'react-navigation';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers';
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';
import { StyleSheet, BackHandler, SafeAreaView } from "react-native";
import { Provider, connect } from 'react-redux';
import React from 'react';
import routes from './src/views/route';
import getStore from "./store";
// import Orientation from 'react-native-orientation';

const AppNavigator = createStackNavigator(routes, {
  initialRouteName: 'splash',
  headerMode: 'none',
  transitionConfig: getSlideFromRightTransition,
  navigationOptions: {
    gesturesEnabled: false
  }
});
const navReducer = createNavigationReducer(AppNavigator);
const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);
const App = reduxifyNavigator(AppNavigator, "root");
const mapStateToProps = (state) => ({
  state: state.nav,
});
const AppWithNavigationState = connect(mapStateToProps)(App);
const store = getStore(navReducer, middleware);

export default class Root extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <Provider store={store} style={{ backgroundColor: 'green' }}>
          <AppWithNavigationState />
        </Provider>
      </SafeAreaView>
    );
  }
  componentDidMount() {
    console.log('lockToPortrait')
    // Orientation.lockToPortrait();
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }
  onBackPress = () => {
    const { dispatch, nav } = this.props;
    if (nav.index === 0) {
      return true;
    }
    dispatch(NavigationActions.back());
    return true;
  };
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ddd'
  }
})