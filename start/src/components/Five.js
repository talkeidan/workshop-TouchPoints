import React, {useState} from "react";
import { StyleSheet, View, Image, ImageBackground } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import normalize from "react-native-normalize";
import Point from "./Point";
import Confetti from "../animations/Confetti";

const Five = ({onPress}) => {
  const [counter, setCounter] = useState(5);
  const [ isPress, setIsPress ] = useState(false);
  const [rewardState, setRewardState] = useState('rest');
      
  return <ImageBackground style={styles.bgimage} source={require("../../assets/kid5.png")} resizeMode="contain">
      <View style={styles.container}>
          <Confetti rewardState={rewardState}/>
          <Point unpressedStyle={styles.button1} setCounter={() => setCounter(counter - 1)} setRewardState={(rewardState) => setRewardState('reward')} count={counter}/>
          <Point unpressedStyle={styles.button2} setCounter={() => setCounter(counter - 1)} setRewardState={(rewardState) => setRewardState('reward')} count={counter}/>
          <Point unpressedStyle={styles.button3} setCounter={() => setCounter(counter - 1)} setRewardState={(rewardState) => setRewardState('reward')} count={counter}/>
          <Point unpressedStyle={styles.button4} setCounter={() => setCounter(counter - 1)} setRewardState={(rewardState) => setRewardState('reward')} count={counter}/>
          <Point unpressedStyle={styles.button5} setCounter={() => setCounter(counter - 1)} setRewardState={(rewardState) => setRewardState('reward')} count={counter}/>
      </View>
  </ImageBackground>
}

const styles = StyleSheet.create({
    container: {
        height: hp('80%'), 
        width: wp('60%'), 
        flex: 1, 
        position: 'relative'
    },
    bgimage:{
        position: "relative",
        height: hp('100%'),
        width: wp('65%'),
        flex: 1,
        shadowColor: "#36393d",
        shadowOffset: { width: 1 },
        elevation: 20,
        shadowRadius: 5,
        shadowOpacity: 1,
    },
    button1: {
        position: "absolute",
        backgroundColor: "#331a00",
        aspectRatio: 1 / 1,
        height: '8%',
        borderRadius: normalize(35),
        top: "17%",
        left: "30%"
      },
      button2: {
        position: "absolute",
        backgroundColor: "#331a00",
        aspectRatio: 1 / 1,
        height: '8%',
        borderRadius: normalize(35),
        top: "17%",
        left: "53%"
      }, 
      button3: {
        position: "absolute",
        backgroundColor: "#331a00",
        aspectRatio: 1 / 1,
        height: '8%',
        borderRadius: normalize(35),
        top: "17%",
        left: "73%"
      },
      button4: {
        position: "absolute",
        backgroundColor: "#331a00",
        aspectRatio: 1 / 1,
        height: '8%',
        borderRadius: normalize(35),
        top: "45%",
        left: "30%"
      },
      button5: {
        position: "absolute",
        backgroundColor: "#331a00",
        aspectRatio: 1 / 1,
        height: '8%',
        borderRadius: normalize(35),
        top: "73%",
        left: "30%"
      }
});

export default Five;