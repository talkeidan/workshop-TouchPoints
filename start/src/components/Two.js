import React, {useState} from "react";
import { Button, Text, StyleSheet, View, Image, ImageBackground, TouchableOpacity, c, Dimensions} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RewardsComponent from 'react-native-rewards';
import normalize from "react-native-normalize";
import Point from "./Point";
import Confetti from "../animations/Confetti";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const isMobile = windowWidth <= 812 && true;

const Two = ({isRight, isAdd, onPress, isNaked}) => {
    const [counter, setCounter] = useState(2);
    const [ isPress, setIsPress ] = useState(false);
    const [rewardState, setRewardState] = useState('rest');

    //return <View style={isAdd? isRight? styles.addContainerLeft  : styles.addContainer : styles.mainContainer}>
    return <ImageBackground style={isAdd? styles.bgimageAdd : styles.bgimage} source={
            isNaked ? rewardState == 'reward' ? isAdd ? require("../../assets/number2.png") : require("../../assets/kid2.png") : require("../../assets/number2.png") : require("../../assets/kid2.png")} resizeMode="contain">
        <Confetti rewardState={rewardState}/>
        <Point 
            unpressedStyle={isNaked? styles.transButton1 : styles.button1} 
            pressedStyle={isNaked? styles.button1 : {}}
            setCounter={() => setCounter(counter - 1)} 
            setRewardState={(rewardState) => setRewardState('reward')} 
            count={counter}
            isAdd={isAdd}/>
        <Point 
            unpressedStyle={isNaked? styles.transButton2 : styles.button2} 
            pressedStyle={isNaked? styles.button2 : {}}
            setCounter={() => setCounter(counter - 1)} 
            isAdd={isAdd}
            setRewardState={(rewardState) => setRewardState('reward')} 
            count={counter}/>
        </ImageBackground>
    // </View>
    
}


const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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
        alignSelf: "center"
      },
    image: {
        position: "absolute",
        aspectRatio: 1 / 1,
        height: '100%',
        bottom:'12%',
        left:'30%',
        resizeMode: "contain"
    },
    button1: {
        position: "absolute",
        backgroundColor: "black",
        borderRadius: normalize(35),
        left: isMobile ? '24%' : '6%',
        top: isMobile ? "18%" : '18%',
        width: isMobile ? 40 : 75,
        height: isMobile ? 40 : 75,
      },
      button2: {
        position: "absolute",
        backgroundColor: "black",
        borderRadius: normalize(35),
        left: isMobile ? '27%' : '13%',
        top: isMobile ? '70%' : '70%',
        width: isMobile ? 40 : 75,
        height: isMobile ? 40 : 75,
      },
      transButton1: {
        position: "absolute",
        backgroundColor: "yellow",
        borderRadius: normalize(35),
        left: isMobile ? '24%' : '6%',
        top: isMobile ? "18%" : '18%',
        width: isMobile ? 40 : 75,
        height: isMobile ? 40 : 75,
      },
      transButton2: {
        position: "absolute",
        backgroundColor: "yellow",
        borderRadius: normalize(35),
        left: isMobile ? '27%' : '13%',
        top: isMobile ? '70%' : '70%',
        width: isMobile ? 40 : 75,
        height: isMobile ? 40 : 75,
      },
      addContainer: {
        position: "absolute",
        width: isMobile? "15%" : "25%",
        aspectRatio: 1/1,
        borderRadius: 150,
        backgroundColor: "pink",
        top: isMobile? "22%" : "22%",
        left: isMobile? "52%" : "54%",
    },
    bgimageAdd: {
        marginTop: "10%",
        height: "85%",
        width: "100%",
        shadowColor: "#36393d",
    },
    addContainerLeft: {
      position: "absolute",
      width: isMobile? "15%" : "25%",
      aspectRatio: 1/1,
      borderRadius: 150,
      backgroundColor: "pink",
      top: isMobile? "22%" : "22%",
      left: isMobile? "32%" : "21%",
  }
      
});

export default Two;