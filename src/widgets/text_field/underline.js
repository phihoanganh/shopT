'use strict';
import React, { Component } from "react";
import PropTypes from 'prop-types';
import { View, StyleSheet, Animated } from "react-native";
import Colors from '../../global/colors'

export default class Underline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lineLength: new Animated.Value(0),
    };
    this.wrapperWidth = 0;
  }
  componentDidMount() {
    requestAnimationFrame(() => {
      if (this.refs.wrapper == null) {
        return;
      }
      // const container = this.refs.wrapper;  // un-box animated view
      // container.measure((left, top, width, height) => {
      //   this.wrapperWidth = width;
      // });
    });
  }
  expandLine() {
    Animated.timing(this.state.lineLength, {
      toValue: 1,
      duration: this.props.duration
    }).start();
  }
  shrinkLine() {
    Animated.timing(this.state.lineLength, {
      toValue: 0,
      duration: this.props.duration
    }).start();
  }
  render() {
    let {
      borderColor,
    } = this.props;
    return (
      <View
        style={[styles.underlineWrapper, {
          backgroundColor: borderColor
        }]}
        ref="wrapper"
      >
        <Animated.View
          style={[{
            opacity: this.state.lineLength,
            height: 1,
            width: '100%',
            backgroundColor: Colors.dark_blue
          }]}>
        </Animated.View>
      </View>
    );
  }
}

Underline.propTypes = {
  duration: PropTypes.number,
  borderColor: PropTypes.string
};

const styles = StyleSheet.create({
  underlineWrapper: {
    height: 1,
    alignItems: 'center'
  }
});
