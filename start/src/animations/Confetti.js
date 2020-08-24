import React from "react";
import { Dimensions } from "react-native";
import LottieView from 'lottie-react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

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
        />
      );
    }
  }