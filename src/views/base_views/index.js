import React, { Component } from 'react';
import {
    View,
    ActivityIndicator,
} from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import styles from './style';
import Colors from '../../global/colors';
import Popup from '../../widgets/popup';

class BaseView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            isPopupOpen: false,
            popupView: null
        }
    }
    render() {
        return (
            <View style={styles.container}>
                {this.renderBaseContent()}
                {this.state.isPopupOpen &&
                    this.state.popupView
                }
                {this.state.isLoading &&
                    <View ref="loadingView" style={this.loading}>
                        <ActivityIndicator size="large"
                            color={Colors.dark_blue} />
                    </View>}
                {/* {this.state.isLoading && <Modal
                    visible={true}
                    transparent={true}>
                    <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator size="large"
                            color={Colors.dark_blue} />
                    </View>
                </Modal>} */}
            </View>
        );
    }
    renderPopup(title, message, image, closeText, btnStyle, afterCloseFunction) {
        var mView = (
            <Popup
                afterCloseFunction={() => {
                    this.disablePopup();
                    if (afterCloseFunction) {
                        afterCloseFunction();
                    }
                }}
                disablePopup={this.disablePopup.bind(this)}
                image={image}
                title={title}
                message={message}
                closeText={closeText}
                isOpen={true}
                btnStyle={btnStyle} />
        );
        this.setState({
            popupView: mView,
            isPopupOpen: true
        });
    }
    disablePopup() {
        this.setState({
            popupView: null,
            isPopupOpen: false
        });
    }
    pushPage(pageView, params) {
        const { navigate } = this.props.navigation;
        navigate(pageView, params);
    }
    resetPage(index, pageView, params) {
        const { dispatch } = this.props.navigation;
        dispatch(StackActions.reset({
            index: index,
            key: null,
            actions: [NavigationActions.navigate({ routeName: pageView, params: params })]
        }))
    }
    goBack() {
        const { goBack } = this.props.navigation;
        goBack();
    }
    setLoading(value) {
        this.setState({
            isLoading: value
        });
    }
    getPassingParam(itemId) {
        return this.props.navigation.getParam(itemId, null)
    }
}

module.exports = BaseView;