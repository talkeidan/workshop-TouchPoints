import React from "react";
import { Dimensions, View } from "react-native";
import LottieView from 'lottie-react-native';

export default class Balloons extends React.Component {
    
    componentDidUpdate() {
        this.animation.play();
    }
  
    render() {
        const screenWidth = Math.round(Dimensions.get('window').width);
        const screenHeight = Math.round(Dimensions.get('window').height);
      return (
        <View
        style={{
          position: 'absolute',
          height: screenHeight,
          width: screenWidth,
          justifyContent: 'flex-end',
        }}
      >
        <LottieView
          ref={animation => {
            this.animation = animation;
          }}
          source={require('../../assets/sky-balloons.json')}
          loop={true} 
          autoPlay={true} 
          resizeMode="cover"
        />
        </View>
      );
    }
  }