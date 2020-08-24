import React, {useState} from "react";
import { Button, Text, StyleSheet, View, Image, ImageBackground, TouchableOpacity, c, Dimensions} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RewardsComponent from 'react-native-rewards';
import normalize from "react-native-normalize";
import Point from "./Point";
import Confetti from "../animations/Confetti";

const windowWidth = Dimensions.get('window').width;
const isMobile = windowWidth <= 812 && true;

function Two() {
    const [counter, setCounter] = useState(2);
    const [ isPress, setIsPress ] = useState(false);
    const [rewardState, setRewardState] = useState('rest');

    return <View style={styles.mainContainer}>
        <ImageBackground style={styles.bgimage} source={require("../../assets/kid2.png")} resizeMode="contain">
        <Confetti rewardState={rewardState}/>
        <Point unpressedStyle={styles.button1} setCounter={() => setCounter(counter - 1)} setRewardState={(rewardState) => setRewardState('reward')} count={counter}/>
        <Point unpressedStyle={styles.button2} setCounter={() => setCounter(counter - 1)} setRewardState={(rewardState) => setRewardState('reward')} count={counter}/>
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
    container: {
        height: hp('80%'), 
        width: wp('60%'), 
        flex: 1, 
        position: 'relative'
    },
    bgimage:{
        position: "relative",
        //alignSelf: "center",
        //justifyContent: "center",
        //top: normalize(10),
        marginTop: isMobile ? '2%' : '6%',
        //padding: "5%",
        borderRadius: 20,
        height: hp('80%'),
        width: wp('60%'),
        //flex: 1,
        shadowColor: "#36393d",
        shadowOffset: { width: 1 },
        //elevation: 20,
        shadowRadius: 5,
        shadowOpacity: 1,
        direction: 'ltr',

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
      
});

export default Two;