import React, {
  StyleSheet
} from 'react-native';
import Color from '../../global/colors'

module.exports = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%'
  },
  loading: {
    zIndex: 99999,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  popup_box: {
    position: 'absolute',
    right: 30,
    left: 30,
    backgroundColor: 'white',
    borderRadius: 5,
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 8
  },
  popup_title: {
    fontSize: 16,
    color: Color.dark_blue,
    fontFamily: "Comfortaa-Bold",
    marginTop: 10
  },
  popup_message: {
    fontSize: 14,
    color: Color.dark,
    marginTop: 20,
    fontFamily: "Comfortaa-Regular",
  },
  popup_btn: {
    height: 35,
    width: 120,
    backgroundColor: Color.dark_blue,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20
  },
  popup_btn_text: {
    fontSize: 14,
    color: Color.smoke,
    fontFamily: "Comfortaa-Regular"
  }
});
