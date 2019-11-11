import React, { Component } from "react"
import PropTypes from 'prop-types'
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from "react-native"
import Colors from '../../global/colors'
import Underline from './underline'
import FloatingLabel from './floating_label'

export default class TextField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
      text: props.value,
      secureText: props.secureText ? true : false,
      errorText: null
    };
  }
  focus() {
    this.refs.input.focus();
  }
  blur() {
    this.refs.input.blur();
  }
  isFocused() {
    return this.state.isFocused;
  }

  render() {
    let {
      label,
      duration,
      labelColor,
      borderColor,
      textColor,
      onFocus,
      onBlur,
      onChangeText,
      onChange,
      value,
      wrapperStyle,
      labelStyle,
      multiline,
      secureText,
      requireChar,
      ...props
    } = this.props;
    let height = this.props.height || 40
    return (
      <View style={[styles.wrapper, wrapperStyle, { width: '100%' }, height && { height: height + (this.state.errorText ? 35 : 20) }]} ref="wrapper">
        <TextInput
          secureTextEntry={this.state.secureText}
          autoCapitalize={'none'}
          style={[styles.textInput, {
            color: textColor
          }, this.state.isFocused && {
            color: Colors.gray
          }, !this.state.isFocused && {
            color: Colors.light_gray
          }, secureText && { paddingRight: 65 }, height && { height }]}
          multiline={multiline}
          onFocus={() => {
            this.setState({ isFocused: true });
            this.refs.floatingLabel.floatLabel();
            this.refs.underline.expandLine();
            onFocus && onFocus();
          }}
          onBlur={() => {
            this.setState({ isFocused: false });
            !this.state.text.length && this.refs.floatingLabel.sinkLabel();
            this.refs.underline.shrinkLine();
            onBlur && onBlur();
          }}
          onChangeText={(text) => {
            let newText = '';
            if (this.props.isNumber) {
              let numbers = '0123456789';
              for (var i = 0; i < text.length; i++) {
                if (numbers.indexOf(text[i]) > -1) {
                  newText = newText + text[i];
                }
              }
            } else {
              newText = text;
            }
            this.setState({
              text: newText,
              errorText: null
            })
            // this.setState({ text });
            onChangeText && onChangeText(text)
          }}
          onChange={(event) => {
            onChange && onChange(event);
          }}
          ref="input"
          value={this.state.text}
          {...props}
        />
        {secureText && <TouchableOpacity onPress={() => this.setState({ secureText: !this.state.secureText })} style={styles.show_pass_box}>
          <Text style={{ marginBottom: 5, fontFamily: 'Comfortaa-Regular', fontSize: 10, color: Colors.dim_gray }}>{this.state.secureText ? 'Show' : 'Hide'}</Text>
        </TouchableOpacity>}
        <Underline
          ref="underline"
          duration={duration}
          borderColor={borderColor}
        />
        <FloatingLabel
          isFocused={this.state.isFocused}
          ref="floatingLabel"
          focusHandler={this.focus.bind(this)}
          label={label}
          labelColor={labelColor}
          duration={duration}
          hasValue={(this.state.text.length) ? true : false}
          style={labelStyle}
        />
        {this.state.errorText && <Text style={styles.errorText}>{this.state.errorText}</Text>}
        {requireChar && <Text style={styles.require_character}>*</Text>}
      </View>
    );
  }
  setErrorText(value) {
    this.setState({
      errorText: value
    })
  }
  getValue() {
    return this.state.text;
  }
  setValue(value) {
    if (value != null && value != undefined && value != '') {
      this.setState({
        text: value
      });
      this.refs.floatingLabel.floatLabel();
    }

  }
}

TextField.propTypes = {
  duration: PropTypes.number,
  label: PropTypes.string,
  labelColor: PropTypes.string,
  borderColor: PropTypes.string,
  textColor: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChangeText: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string,
  wrapperStyle: PropTypes.object,
  labelStyle: PropTypes.object,
  multiline: PropTypes.bool,
};

TextField.defaultProps = {
  duration: 200,
  labelColor: '#9E9E9E',
  borderColor: '#E0E0E0',
  textColor: '#000',
  value: '',
  underlineColorAndroid: 'rgba(0,0,0,0)',
  multiline: false,
};

const styles = StyleSheet.create({
  wrapper: {
    height: 60,
    paddingTop: 30
  },
  textInput: {
    fontSize: 14,
    height: 40,
    lineHeight: 20,
    color: '#A5A8AA',
    textAlignVertical: 'center',
    paddingVertical: 0,
    paddingHorizontal: 0
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    fontFamily: "Comfortaa-Regular",
    alignSelf: 'flex-end'
  },
  require_character: {
    color: 'red',
    position: 'absolute',
    right: 0,
    top: 35
  },
  show_pass_box: {
    position: 'absolute',
    right: 0,
    height: 60,
    width: 60,
    top: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  }
});
