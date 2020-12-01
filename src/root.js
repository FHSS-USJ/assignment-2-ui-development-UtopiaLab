import React, {Component} from 'react';
import {View, Image, Alert, Vibration} from 'react-native';
import {main} from './styles/style-main';
import {images} from './config/images';
import KeyPad from './components/keypad';
// import {CorrectAlert} from './components/correct-alert';

class LockScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pinArray: [],
    };
  }

  render() {
    return (
      <View style={main.mainView}>
        <Image source={images.logo} style={main.logo} />
        <View style={main.dotBar}>{this.Dots()}</View>
        <KeyPad onPress={(val) => this.pinVerify(val)} />
      </View>
    );
  }

  CorrectAlert = () =>
    Alert.alert(
      'PIN is Correct!',
      'The PIN you entered is correct.',
      [{text: 'OK', onPress: () => console.log('OK!')}],
      {cancelable: false},
    );

  WrongAlert = () =>
    Alert.alert(
      'Incorrect PIN!',
      'The PIN you entered is incorrect.',
      [{text: 'OK', onPress: () => console.log('OK!')}],
      {cancelable: false},
    );

  pinVerify(val) {
    console.log(val);
    let pinArray = this.state.pinArray;
    let preArrary = ['2', '7', '5', '4'];
    if (isNaN(val)) {
      if (val === 'back') {
        pinArray.pop();
      } else {
        pinArray[pinArray.length] = val;
      }
    } else {
      pinArray[pinArray.length] = val;
    }
    // console.log(pinArray, preArrary);
    if (pinArray.length === preArrary.length) {
      this.setState({pinArrary: pinArray});
      // eslint-disable-next-line eqeqeq
      if (JSON.stringify(pinArray) == JSON.stringify(preArrary)) {
        console.log('Pin is Correct!');
        Vibration.vibrate(200);
        pinArray.length = 0;
        // eslint-disable-next-line no-sequences
        return this.CorrectAlert(), this.setState({pinArrary: pinArray});
      } else {
        console.log('Pin is Incorrect!');
        pinArray.length = 0;
        Vibration.vibrate(200);
        // eslint-disable-next-line no-sequences
        return this.WrongAlert(), this.setState({pinArrary: pinArray});
      }
    }
    this.setState({pinArrary: pinArray});
  }

  Dots() {
    let pinLength = this.state.pinArray.length;

    if (pinLength === 0) {
      return (
        <View style={main.dotBar}>
          <View style={main.dotEmpty} />
          <View style={main.dotEmpty} />
          <View style={main.dotEmpty} />
          <View style={main.dotEmpty} />
        </View>
      );
    } else if (pinLength === 1) {
      return (
        <View style={main.dotBar}>
          <View style={main.dotFilled} />
          <View style={main.dotEmpty} />
          <View style={main.dotEmpty} />
          <View style={main.dotEmpty} />
        </View>
      );
    } else if (pinLength === 2) {
      return (
        <View style={main.dotBar}>
          <View style={main.dotFilled} />
          <View style={main.dotFilled} />
          <View style={main.dotEmpty} />
          <View style={main.dotEmpty} />
        </View>
      );
    } else if (pinLength === 3) {
      return (
        <View style={main.dotBar}>
          <View style={main.dotFilled} />
          <View style={main.dotFilled} />
          <View style={main.dotFilled} />
          <View style={main.dotEmpty} />
        </View>
      );
    } else if (pinLength === 4) {
      return (
        <View style={main.dotBar}>
          <View style={main.dotFilled} />
          <View style={main.dotFilled} />
          <View style={main.dotFilled} />
          <View style={main.dotFilled} />
        </View>
      );
    }
  }
}

export default LockScreen;
