import React, {useState, useEffect} from "react";
import { Button, Text, StyleSheet, View, Image, ImageBackground, Dimensions} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import normalize from "react-native-normalize";
import Point from "./Point";
import Confetti from "../animations/Confetti";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const isMobile = windowWidth <= 812 && true;

const Three = ({onPress, isNaked}) => {
    const [counter, setCounter] = useState(3);
    const [ isPress, setIsPress ] = useState(false);
    const [rewardState, setRewardState] = useState('rest');
        
    return <View style={styles.mainContainer}>
        <ImageBackground style={styles.bgimage} source={
              isNaked ? rewardState == 'reward' ? require("../../assets/kid3.png") : require("../../assets/number3.png") : require("../../assets/kid3.png")} resizeMode="contain">
        <Confetti rewardState={rewardState}/>
        <Point 
            unpressedStyle={isNaked? styles.transButton1 : styles.button1} 
            pressedStyle={isNaked? styles.button1 : {}}
            setCounter={() => setCounter(counter - 1)} 
            setRewardState={(rewardState) => setRewardState('reward')} 
            count={counter}/>
        <Point 
            unpressedStyle={isNaked? styles.transButton2 : styles.button2} 
            pressedStyle={isNaked? styles.button2 : {}}
            setCounter={() => setCounter(counter - 1)} 
            setRewardState={(rewardState) => setRewardState('reward')} 
            count={counter}/>
        <Point 
            unpressedStyle={isNaked? styles.transButton3 : styles.button3} 
            pressedStyle={isNaked? styles.button3 : {}}
            setCounter={() => setCounter(counter - 1)} 
            setRewardState={(rewardState) => setRewardState('reward')} 
            count={counter}/>
        </ImageBackground>
    </View>
}

const styles = StyleSheet.create({
    container: {
        height: hp('80%'), 
        width: wp('60%'), 
        flex: 1, 
        position: 'relative'
    },
    mainContainer: {
      width: windowWidth,
      height: windowHeight,
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
  },
    bgimage:{
      flex: 1,
        position: "relative",
        marginTop: "2%",
        borderRadius: 20,
        height: hp('85%'),
        width: isMobile? wp('55%') : wp('90%'),
        shadowColor: "#36393d",
        shadowOffset: { width: 1 },
        shadowRadius: 5,
        shadowOpacity: 1,
        direction: 'ltr',
    },
    button1: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: '10%',
        borderRadius: normalize(35),
        top: isMobile? "22%" : "27%",
        left: isMobile? "18%" : "9%",
      },
      button2: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: '10%',
        borderRadius: normalize(35),
        top: isMobile? "44%" : "44%",
        left: isMobile? "12%" : "1%"
      },
      button3: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: '10%',
        borderRadius: normalize(35),
        top: isMobile? "71%" : "65%",
        left: isMobile? "15%" : "7%"
      },
      transButton1: {
        position: "absolute",
        backgroundColor: "yellow",
        aspectRatio: 1 / 1,
        height: '10%',
        borderRadius: normalize(35),
        top: isMobile? "22%" : "27%",
        left: isMobile? "18%" : "9%",
      },
      transButton2: {
        position: "absolute",
        backgroundColor: "yellow",
        aspectRatio: 1 / 1,
        height: '10%',
        borderRadius: normalize(35),
        top: isMobile? "44%" : "44%",
        left: isMobile? "12%" : "1%"
      },
      transButton3: {
        position: "absolute",
        backgroundColor: "yellow",
        aspectRatio: 1 / 1,
        height: '10%',
        borderRadius: normalize(35),
        top: isMobile? "71%" : "65%",
        left: isMobile? "15%" : "7%"
      },
});

export default Three;