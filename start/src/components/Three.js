import React, {useState, useEffect} from "react";
import { Button, Text, StyleSheet, View, Image, ImageBackground, Dimensions} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import normalize from "react-native-normalize";
import Point from "./Point";
import Confetti from "../animations/Confetti";

const windowWidth = Dimensions.get('window').width;
const isMobile = windowWidth <= 812 && true;

const Three = ({onPress}) => {
    const [counter, setCounter] = useState(3);
    const [ isPress, setIsPress ] = useState(false);
    const [rewardState, setRewardState] = useState('rest');
        
    return <View style={styles.mainContainer}>
    <ImageBackground style={styles.bgimage} source={require("../../assets/kid3.png")} resizeMode="contain">
            <Confetti rewardState={rewardState}/>
            <Point unpressedStyle={styles.button1} setCounter={() => setCounter(counter - 1)} setRewardState={(rewardState) => setRewardState('reward')} count={counter}/>
            <Point unpressedStyle={styles.button2} setCounter={() => setCounter(counter - 1)} setRewardState={(rewardState) => setRewardState('reward')} count={counter}/>
            <Point unpressedStyle={styles.button3} setCounter={() => setCounter(counter - 1)} setRewardState={(rewardState) => setRewardState('reward')} count={counter}/>
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
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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
});

export default Three;