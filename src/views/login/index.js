import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Image,
    Animated,
    Dimensions
} from 'react-native'
import { connect } from 'react-redux'
import BaseView from '../base_views'
import TextField from '../../widgets/text_field'
import Strings from '../../global/strings'
import styles from './style'
import { doLogin } from '../../actions/view_action/loginAction'
import { doGetCheckOutInfo } from '../../actions/data_action/checkOutAction'

const args = {
    number: '096-6699128', // String value with the number to call
    prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call
}

class Login extends BaseView {
    constructor(props) {
        super(props)
        this.state = {
            containerMarginTop: 0,
            logoAnim: new Animated.Value(130),
            fadeAnim: new Animated.Value(0),
            isLoading: false
        }
    }

    renderBaseContent() {
        let { logoAnim, fadeAnim } = this.state
        return (
            <View style={styles.container}>
                <View style={styles.footer}>
                    <Image style={[styles.footer_image, { height: (Dimensions.get('window').width - 32) * 106 / 660 }]} resizeMode={'contain'} source={require('../../assets/images/footer.png')} ></Image>
                </View>
                <ScrollView>
                    <Animated.View style={[styles.logo_box, { marginTop: logoAnim, opacity: fadeAnim }]}>
                        <Image style={styles.logo} resizeMode={'contain'} source={require('../../assets/images/logo.png')} ></Image>
                    </Animated.View>

                    <Animated.View style={[styles.form, { opacity: fadeAnim }]}>
                        <TextField
                            ref="tf_username"
                            label={Strings.username_hint}
                        />

                        <TextField
                            ref="tf_password"
                            label={Strings.password_hint}
                            secureText={true}
                        />

                        <TouchableOpacity
                            onPress={this.doLogin.bind(this)}
                            style={styles.submit}
                            underlayColor='transparent'>
                            <Text style={styles.btn_text}>{Strings.login_btn}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {

                        }}>
                            <Text style={styles.forgot_pass}>{Strings.forgot_pass}</Text>
                        </TouchableOpacity>
                    </Animated.View>
                </ScrollView>
            </View>
        )
    }
    doLogin() {
        // this.setLoading(true)
        this.resetPage(0, 'product_list', null)
        // let username = this.refs.tf_username.getValue();
        // let password = this.refs.tf_password.getValue();
        // this.props.doLogin(username, password)
    }
    componentDidMount() {
        Animated.parallel([
            Animated.timing(
                this.state.logoAnim,
                {
                    toValue: 90,
                    duration: 1000,
                },
            ),
            Animated.timing(
                this.state.fadeAnim,
                {
                    toValue: 1,
                    duration: 2000,
                }
            )
        ]).start()
        this.props.doGetCheckOutInfo()
    }
}
function mapStateToProps(state) {
    return {
        nav: state.nav
    }
}
export default connect(mapStateToProps, { doLogin, doGetCheckOutInfo })(Login)