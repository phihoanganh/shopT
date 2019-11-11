import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Modal,
    Image
} from 'react-native';
import Strings from '../../global/strings';
import Color from '../../global/colors'

var styles = require('./styles');
const PropTypes = require('prop-types');

export default class InputRow extends Component {
    static propTypes = {
        onResponse: PropTypes.func,
        title: PropTypes.string,
        message: PropTypes.string,
        image: PropTypes.any,
        closeText: PropTypes.string,
        afterCloseFunction: PropTypes.func,
        disablePopup: PropTypes.func,
        btnStyle: PropTypes.number,
        isOpen: PropTypes.bool
    };

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: props.isOpen || false,
            title: props.title,
            message: props.message
        }
    }

    render() {
        var btn = null;
        switch (this.props.btnStyle) {
            case 1:
                btn = (<TouchableOpacity
                    onPress={() => { if (this.props.afterCloseFunction) { this.props.afterCloseFunction() } this.setState({ modalVisible: false }) }}
                    style={styles.submit}
                    underlayColor='transparent'>
                    <Text style={styles.btn_text}>{this.props.closeText || Strings.close}</Text>
                </TouchableOpacity>);
                break;
            default:
                btn = (<TouchableOpacity
                    onPress={() => { if (this.props.afterCloseFunction) { this.props.afterCloseFunction() } this.setState({ modalVisible: false }) }}
                    style={styles.get_picture}
                    underlayColor='transparent'>
                    <Text style={styles.btn_galary_text}>{this.props.closeText || Strings.close}</Text>
                </TouchableOpacity>);
                break;
        }
        return (
            <Modal
                visible={this.state.modalVisible}
                onRequestClose={() => this.setState({ modalVisible: true })}
                transparent={true}>
                <TouchableWithoutFeedback onPress={() => {
                    // this.setState({ modalVisible: false })
                    // if (this.props.disablePopup) this.props.disablePopup();
                }} >
                    <View style={styles.modal_box}>
                        <TouchableWithoutFeedback>
                            <View style={styles.popup_box}>
                                <View style={[styles.title_box, this.props.btnStyle == 2 && { backgroundColor: Color.deep_saffron }]}>
                                    <Image style={styles.icon} resizeMode={'contain'} source={this.props.image || require('../../assets/images/icon_success.png')}></Image>
                                </View>
                                <View style={styles.box_btn}>
                                    <Text style={styles.title_text}>{this.state.title}</Text>
                                    <Text style={styles.message_text}>{this.state.message}</Text>
                                    {btn}
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        );

    }
    openPopup() {
        this.setState({ modalVisible: true })
    }
}
