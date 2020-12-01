import {Component} from 'react';

class OnPressed extends Component {
  onPressed = ({val}) => {
    console.log(val);
    // if (this.props.pressMode === 'string') {
    //   let curText = this.state.text;
    //   if (isNaN(val)) {
    //     if (val === 'back') {
    //       curText = curText.slice(0, -1);
    //     } else {
    //       curText += val;
    //     }
    //   } else {
    //     curText += val;
    //   }
    //   this.setState({text: curText});
    //   this.props.onPress(curText);
    // } /* if (props.pressMode == 'char')*/ else {
    //   this.props.onPress(val);
    // }
  };
}
export default OnPressed;
