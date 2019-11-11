'use strict';
import React, { Component } from "react";
import PropTypes from 'prop-types';
import { StyleSheet, Animated } from "react-native";
import Colors from '../../global/colors'

export default class FloatingLabel extends Component {
  constructor(props) {
    super(props);
    this.posTop = 18;
    this.posBottom = 40;
    let posTop = (props.hasValue) ? this.posTop : this.posBottom;
    this.state = {
      top: new Animated.Value(posTop)
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (this.props.hasValue !== nextProps.hasValue) ? false : true;
  }

  floatLabel() {
    Animated.timing(this.state.top, {
      toValue: this.posTop,
      duration: this.props.duration
    }).start();
  }

  sinkLabel() {
    Animated.timing(this.state.top, {
      toValue: this.posBottom,
      duration: this.props.duration
    }).start();
  }

  render() {
    let {
      label,
      labelColor,
      style
    } = this.props;
    return (
      <Animated.Text
        style={[{
          fontSize: 14,
          top: this.state.top,
          color: Colors.dim_gray
        }, styles.labelText, this.props.isFocused && {
          color: Colors.dark_blue
        }, style]}
        onPress={() => {
          this.props.focusHandler();
        }}
      >
        {label}
      </Animated.Text>
    );
  }
}

FloatingLabel.propTypes = {
  duration: PropTypes.number,
  label: PropTypes.string,
  style: PropTypes.object
};

const styles = StyleSheet.create({
  labelText: {
    position: 'absolute',
    left: 0,
    backgroundColor: 'rgba(0,0,0,0)',
    fontFamily: "Comfortaa-Regular",
  }
});
