import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {images} from '../config/images';
import {styles} from '../styles/style-keypad';

class KeyPad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        {this.Row([1, 2, 3])}
        {this.Row([4, 5, 6])}
        {this.Row([7, 8, 9])}
        <View style={styles.row}>
          <View style={styles.bottomRowLeft} />
          {this.Cell(0)}
          {this.Backspace()}
          <View style={styles.bottomRowRight} />
        </View>
      </View>
    );
  }

  Backspace() {
    return (
      <TouchableOpacity
        accessibilityLabel="backspace"
        style={styles.backspace}
        onPress={() => {
          this.onPress('back');
        }}>
        <Image source={images.backspace} resizeMode="contain" />
      </TouchableOpacity>
    );
  }

  Row(numbersArray) {
    let cells = numbersArray.map((val) => this.Cell(val));
    return <View style={styles.row}>{cells}</View>;
  }

  Cell(symbol) {
    return (
      <TouchableOpacity
        style={styles.cell}
        key={symbol}
        accessibilityLabel={symbol.toString()}
        onPress={() => {
          this.onPress(symbol.toString());
        }}>
        <Text style={styles.number}>{symbol}</Text>
      </TouchableOpacity>
    );
  }

  onPress(val) {
    let currentText = this.state.text;
    currentText = val;
    this.setState({text: currentText});
    this.props.onPress(currentText);
  }
}

export default KeyPad;
