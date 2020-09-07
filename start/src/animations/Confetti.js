import React, {useState} from "react";
import { Dimensions } from "react-native";
import LottieView from 'lottie-react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default class Confetti extends React.Component {
    componentDidUpdate() {
        if (this.props.rewardState == 'reward') {
            this.animation.play();
        }
    }
  
    render() {
      return (
        <LottieView
          ref={animation => {
            this.animation = animation;
          }}
          source={require('../../assets/confetti.json')}
          duration={3000} 
          loop={false} 
          autoPlay={false} 
          style={{marginTop: "5%", zIndex: this.props.rewardState == 'reward'? 1 : 0}}
        />
      );
    }
  }