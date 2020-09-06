import React, {useState, useEffect} from "react";
import { Button, Text, StyleSheet, View, Image, ImageBackground, Dimensions} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import normalize from "react-native-normalize";
import Point from "./Point";
import Confetti from "../animations/Confetti";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const isMobile = windowWidth <= 812 && true;

const Three = ({isRight, isAdd, onPress, isNaked}) => {
    const [counter, setCounter] = useState(3);
    const [ isPress, setIsPress ] = useState(false);
    const [rewardState, setRewardState] = useState('rest');
        
    return <ImageBackground style={isAdd? styles.bgimageAdd : styles.bgimage} source={
        isNaked ? rewardState == 'reward' ? require("../../assets/kid3.png") : require("../../assets/number3.png") : isAdd ? require("../../assets/number3.png") : rewardState == 'reward' ? require("../../assets/kid3.png") : require("../../assets/kid-point3.png")} resizeMode="contain">
        <View style={{top: "-4%", left: isMobile? "-30%" : "-25%", position: "absolute", height: windowHeight, width: windowWidth}}>
        <Confetti rewardState={rewardState}/>
        </View>
        <Point 
            unpressedStyle={isNaked? styles.transButton1 : styles.button1} 
            pressedStyle={isNaked? styles.button1 : {}}
            isAdd={isAdd}
            setCounter={() => setCounter(counter - 1)} 
            setRewardState={(rewardState) => setRewardState('reward')} 
            count={counter}/>
        <Point 
            unpressedStyle={isNaked? styles.transButton2 : styles.button2} 
            pressedStyle={isNaked? styles.button2 : {}}
            isAdd={isAdd}
            setCounter={() => setCounter(counter - 1)} 
            setRewardState={(rewardState) => setRewardState('reward')} 
            count={counter}/>
        <Point 
            unpressedStyle={isNaked? styles.transButton3 : styles.button3} 
            isAdd={isAdd}
            pressedStyle={isNaked? styles.button3 : {}}
            setCounter={() => setCounter(counter - 1)} 
            setRewardState={(rewardState) => setRewardState('reward')} 
            count={counter}/>
        
        </ImageBackground>
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
        marginTop: isMobile? "5%" : "2%",
        borderRadius: 20,
        height: hp('90%'),
        width: isMobile? wp('100%') : wp('120%'),
        shadowColor: "#36393d",
        shadowOffset: { width: 1 },
        shadowRadius: 5,
        shadowOpacity: 1,
        direction: 'ltr',
        left: "30%",
        alignContent: "center",
        
    },
    button1: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: isMobile? "18%" : '13%',
        borderRadius: normalize(35),
        top: isMobile? "0%" : "11.8%",
        left: isMobile? "6.9%" : "6.3%",
      },
      button2: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: isMobile? "18%" : '13%',
        borderRadius: normalize(35),
        top: isMobile? "28.5%" : "30.4%",
        left: isMobile? "0.3%" : "0%"
      },
      button3: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: isMobile? "18.2%" : '13%',
        borderRadius: normalize(35),
        top: isMobile? "65.2%" : "56%",
        left: isMobile? "5.5%" : "5%"
      },
      transButton1: {
        position: "absolute",
        backgroundColor: "yellow",
        aspectRatio: 1 / 1,
        height: isMobile? "18%" : '13%',
        borderRadius: normalize(35),
        top: isMobile? "0%" : "11.8%",
        left: isMobile? "6.9%" : "6.3%",
      },
      transButton2: {
        position: "absolute",
        backgroundColor: "yellow",
        aspectRatio: 1 / 1,
        height: isMobile? "18%" : '13%',
        borderRadius: normalize(35),
        top: isMobile? "28.5%" : "30.4%",
        left: isMobile? "0.3%" : "0%"
      },
      transButton3: {
        position: "absolute",
        backgroundColor: "yellow",
        aspectRatio: 1 / 1,
        height: isMobile? "18.2%" : '13%',
        borderRadius: normalize(35),
        top: isMobile? "65.2%" : "56%",
        left: isMobile? "5.5%" : "5%"
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

export default Three;