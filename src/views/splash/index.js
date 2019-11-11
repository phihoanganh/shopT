import React from 'react';
import {
    View,
    Image,
    Dimensions,
    Animated
} from 'react-native';
import BaseView from '../base_views';
import { connect } from 'react-redux';
import styles from './style';

class Splash extends BaseView {
    constructor(props) {
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(1)
        }
    }
    componentDidMount() {
        Animated.timing(
            this.state.fadeAnim,
            {
                toValue: 0,
                duration: 1000,
            }
        ).start(() => {
            this.resetPage(0, 'login', { name: 'Jane' })
        })
    }

    renderBaseContent() {
        let { fadeAnim } = this.state
        return (
            <View style={styles.container}>
                <View style={styles.footer}>
                    <Image style={[styles.footer_image, { height: (Dimensions.get('window').width - 32) * 106 / 660 }]} resizeMode={'contain'} source={require('../../assets/images/footer.png')} ></Image>
                </View>
                <Animated.View style={{ opacity: fadeAnim }}>
                    <Image style={styles.logo} resizeMode={'contain'} source={require('../../assets/images/logo.png')} ></Image>
                </Animated.View>
            </View>

        );
    }
}

function mapStateToProps(state) {
    return {
        nav: state.nav
    };
}
export default connect(mapStateToProps, null)(Splash);
