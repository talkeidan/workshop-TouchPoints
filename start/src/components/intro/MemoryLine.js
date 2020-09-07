import React, {useState} from "react";
import { Dimensions ,TouchableWithoutFeedback, Button, Text, StyleSheet, View, Image, ImageBackground, TouchableOpacity} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import normalize from "react-native-normalize";
import Confetti from "../../animations/Confetti";
import Point from "../Point";

const windowWidth = Dimensions.get('window').width;
const isMobile = windowWidth <= 812 && true;

const MemoryLine = () => {
  const [counter, setCounter] = useState(3);
  const [rewardState, setRewardState] = useState('rest');


  return <View style={styles.mainContainer}>
  <ImageBackground style={styles.bgimage} source={require("../../../assets/swing.jpg")} resizeMode="contain">
      <Confetti rewardState={rewardState}/>
      <Text style = {styles.Text}>לחצו על הנקודות המתאימות  </Text>
      <Point unpressedStyle={styles.button1} setCounter={() => setCounter(counter - 1)} setRewardState={(rewardState) => setRewardState('reward')} count={counter}/>
    <Point unpressedStyle={styles.button2} setCounter={() => setCounter(counter - 1)} setRewardState={(rewardState) => setRewardState('reward')} count={counter}/>
    <Point unpressedStyle={styles.button3} setCounter={() => setCounter(counter - 1)} setRewardState={(rewardState) => setRewardState('reward')} count={counter}/>
  </ImageBackground>
</View>
}

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgimage: {
    position: "relative",
    marginTop: isMobile ? '2%' : '6%',
    borderRadius: 20,
    height: hp('80%'),
    width: wp('60%'),
    shadowColor: "#36393d",
    shadowOffset: { width: 1 },
    shadowRadius: 5,
    shadowOpacity: 1,
    direction: 'ltr',
  },
  Text: {
    fontSize:15,
    color: "#002266", 
    fontWeight: 'bold'
  },
  button1: {
    position: "absolute",
    backgroundColor: "black",
    borderRadius: normalize(35),
    left: isMobile ? '80%' : '6%',
    top: isMobile ? '65%' : '18%',
    width: isMobile ? 40 : 75,
    height: isMobile ? 40 : 75,
  },
  button2: {
    position: "absolute",
    backgroundColor: "black",
    borderRadius: normalize(35),
    left: isMobile ? '45%' : '6%',
    top: isMobile ? '65%' : '18%',
    width: isMobile ? 40 : 75,
    height: isMobile ? 40 : 75,
  },
  button3: {
    position: "absolute",
    backgroundColor: "black",
    borderRadius: normalize(35),
    left: isMobile ? '7%' : '6%',
    top: isMobile ? '65%' : '18%',
    width: isMobile ? 40 : 75,
    height: isMobile ? 40 : 75,
  }
});

export default MemoryLine;
