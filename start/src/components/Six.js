import React, {useState} from "react";
import { TouchableWithoutFeedback, Button, Text, StyleSheet, View, Image, ImageBackground, TouchableOpacity} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RewardsComponent from 'react-native-rewards';
import normalize from "react-native-normalize";
import { render } from "react-dom";
import { color } from "react-native-reanimated";
import Point from "./Point";

const Six = ({onPress}) => {
    const [counter, setCounter] = useState(6);
    const [rewardState, setRewardState] = useState('rest');
    

    return <View style={{flexGrow: 1}}>
            <RewardsComponent
                spread={10}
                animationType="confetti"
                colors={['red', 'blue', 'green']}
                state={rewardState}>
            <ImageBackground style={styles.bgimage} source={require("../../assets/kid6.png")} resizeMode="contain">
                <Point unpressedStyle={styles.button1} pressedStyle={styles.button1pressed} setCounter={() => setCounter(counter - 1)} setRewardState={(rewardState) => setRewardState('reward')} count={counter}/>
                <Point unpressedStyle={styles.button2} pressedStyle={styles.button2pressed} setCounter={() => setCounter(counter - 1)} setRewardState={(rewardState) => setRewardState('reward')} count={counter}/>
                <Point unpressedStyle={styles.button3} pressedStyle={styles.button3pressed} setCounter={() => setCounter(counter - 1)} setRewardState={(rewardState) => setRewardState('reward')} count={counter}/>
                <Point unpressedStyle={styles.button4} pressedStyle={styles.button4pressed} setCounter={() => setCounter(counter - 1)} setRewardState={(rewardState) => setRewardState('reward')} count={counter}/>
                <Point unpressedStyle={styles.button5} pressedStyle={styles.button5pressed} setCounter={() => setCounter(counter - 1)} setRewardState={(rewardState) => setRewardState('reward')} count={counter}/>
                <Point unpressedStyle={styles.button6} pressedStyle={styles.button6pressed} setCounter={() => setCounter(counter - 1)} setRewardState={(rewardState) => setRewardState('reward')} count={counter}/>
            </ImageBackground>
            </RewardsComponent>
            </View>
}

const styles = StyleSheet.create({
    bgimage:{
        position: "relative",
        alignSelf: "center",
        justifyContent: "center",
        marginTop: "6%",
        padding: "5%",
        borderRadius: 20,
        height: hp('80%'),
        width: wp('60%'),
        flex: 1,
        shadowColor: "#36393d",
        shadowOffset: { width: 1 },
        elevation: 20,
        shadowRadius: 5,
        shadowOpacity: 1,

    },
    image: {
        position: "absolute",
        aspectRatio: 1 / 1,
        height: '100%',
        bottom:'12%',
        left:'30%',
        resizeMode: "contain"
        //flex: 1,
    },
    button1: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: '150%',
        borderRadius: normalize(35),
        top: "50%",
        left: "70%"
      },
      button2: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: '150%',
        borderRadius: normalize(35),
        top: "500%",
        left: "70%"
      }, 
      button3: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: '150%',
        borderRadius: normalize(35),
        top: "500%",
        left: "20%"
      },
      button4: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: '150%',
        borderRadius: normalize(35),
        top: "50%",
        left: "20%"
      },
      button5: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: '150%',
        borderRadius: normalize(35),
        top: "50%",
        left: "100%"
      },
       button6: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: '150%',
        borderRadius: normalize(35),
        top: "500%",
        left: "100%"
      },
      button1pressed:{
      position: "absolute",
      backgroundColor: "grey",
      aspectRatio: 1 / 1,
      height: '150%',
      borderRadius: normalize(35),
      top: "50%",
      left: "70%"
      }, 
      button2pressed: {
        position: "absolute",
        backgroundColor: "grey",
        aspectRatio: 1 / 1,
        height: '150%',
        borderRadius: normalize(35),
        top: "500%",
        left: "70%"
      },
      button3pressed:{
      position: "absolute",
      backgroundColor: "grey",
      aspectRatio: 1 / 1,
      height: '150%',
      borderRadius: normalize(35),
      top: "500%",
      left: "20%"
      },
      button4pressed:{
      position: "absolute",
      backgroundColor: "grey",
      aspectRatio: 1 / 1,
      height: '150%',
      borderRadius: normalize(35),
      top: "50%",
      left: "20%"
      },
      button5pressed:{
        position: "absolute",
        backgroundColor: "grey",
        aspectRatio: 1 / 1,
        height: '150%',
        borderRadius: normalize(35),
        top: "50%",
        left: "100%"
        },
        button6pressed:{
            position: "absolute",
            backgroundColor: "grey",
            aspectRatio: 1 / 1,
            height: '150%',
            borderRadius: normalize(35),
            top: "500%",
            left: "100%"
            },
      
});

export default Six;