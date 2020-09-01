import React from "react";
import { Dimensions, View } from "react-native";
import LottieView from 'lottie-react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default class Balloons extends React.Component {
    componentDidUpdate() {
        this.animation.play();
    }
  
    render() {
      return (
        <View
        style={{
          // backgroundColor: 'red',
          position: 'absolute',
          height: '100%',
          width: '100%',
          justifyContent: 'flex-end',
        }}
      >
        <LottieView
          ref={animation => {
            this.animation = animation;
          }}
          source={require('../../assets/sky-balloons.json')}
         // duration={3000} 
          loop={true} 
          autoPlay={true} 
          resizeMode= "cover"
          style={{width: screenWidth, height: screenHeight}}
        />
        </View>
      );
    }
  }