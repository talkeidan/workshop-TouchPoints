import React, {useState} from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import normalize from "react-native-normalize";
import Point from "./Point";
import Confetti from "../animations/Confetti";

const Nine = ({onPress}) => {
  const [counter, setCounter] = useState(9);
  const [ isPress, setIsPress ] = useState(false);
  const [rewardState, setRewardState] = useState('rest');
      
  return <ImageBackground style={styles.bgimage} source={require("../../assets/kid9.png")} resizeMode="contain">
    <View style={styles.container}>
          <Confetti rewardState={rewardState}/>
          <Point unpressedStyle={styles.button1} setCounter={() => setCounter(counter - 1)} setRewardState={(rewardState) => setRewardState('reward')} count={counter}/>
          <Point unpressedStyle={styles.button2} setCounter={() => setCounter(counter - 1)} setRewardState={(rewardState) => setRewardState('reward')} count={counter}/>
          <Point unpressedStyle={styles.button3} setCounter={() => setCounter(counter - 1)} setRewardState={(rewardState) => setRewardState('reward')} count={counter}/>
          <Point unpressedStyle={styles.button4} setCounter={() => setCounter(counter - 1)} setRewardState={(rewardState) => setRewardState('reward')} count={counter}/>
          <Point unpressedStyle={styles.button5} setCounter={() => setCounter(counter - 1)} setRewardState={(rewardState) => setRewardState('reward')} count={counter}/>
          <Point unpressedStyle={styles.button6} setCounter={() => setCounter(counter - 1)} setRewardState={(rewardState) => setRewardState('reward')} count={counter}/>
          <Point unpressedStyle={styles.button7} setCounter={() => setCounter(counter - 1)} setRewardState={(rewardState) => setRewardState('reward')} count={counter}/>
          <Point unpressedStyle={styles.button8} setCounter={() => setCounter(counter - 1)} setRewardState={(rewardState) => setRewardState('reward')} count={counter}/>
          <Point unpressedStyle={styles.button9} setCounter={() => setCounter(counter - 1)} setRewardState={(rewardState) => setRewardState('reward')} count={counter}/>
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
        alignSelf: "center",
        justifyContent: "center",
        borderRadius: 20,
        height: hp('150%'),
        width: wp('70%'),
        flex: 1,
        shadowColor: "#36393d",
        shadowOffset: { width: 1 },
        shadowRadius: 5,
        shadowOpacity: 1,
    },
    button1: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: '6%',
        borderRadius: normalize(35),
        top: "38%",
        left: "20%"
      },
      button2: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: '6%',
        borderRadius: normalize(35),
        top: "45%",
        left: "20%"
      }, 
      button3: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: '6%',
        borderRadius: normalize(35),
        top: "55%",
        left: "20%"
      },
      button4: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: '6%',
        borderRadius: normalize(35),
        top: "62%",
        left: "20%"
      },
      button5: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: '6%',
        borderRadius: normalize(35),
        top: "70%",
        left: "20%"
      },
       button6: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: '6%',
        borderRadius: normalize(35),
        top: "38%",
        left: "80%"
      },
      button7: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: '6%',
        borderRadius: normalize(35),
        top: "45%",
        left: "80%"
      },
      button8: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: '6%',
        borderRadius: normalize(35),
        top: "55%",
        left: "80%"
      },
      button9: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: '6%',
        borderRadius: normalize(35),
        top: "70%",
        left: "80%"
      },
});

export default Nine;