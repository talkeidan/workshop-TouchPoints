import React, {useState} from "react";
import { TouchableWithoutFeedback, Button, Text, StyleSheet, View, Image, ImageBackground, TouchableOpacity} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RewardsComponent from 'react-native-rewards';
import normalize from "react-native-normalize";
import Point from "./Point";
import { render } from "react-dom";
import { color } from "react-native-reanimated";



const One = ({onPress}) => {
    const [counter, setCounter] = useState(1);
    const [ isPress, setIsPress ] = useState(false);
    const [rewardState, setRewardState] = useState('rest');

    return <View style={{flexGrow: 1}}>
            <RewardsComponent
                spread={10}
                animationType="confetti"
                colors={['red', 'blue', 'green']}
                state={rewardState}>
            <ImageBackground style={styles.bgimage} source={require("../../assets/kid1.png")} resizeMode="contain" >
            <Point unpressedStyle={styles.button} pressedStyle={styles.button1pressed} setCounter={() => setCounter(counter - 1)} setRewardState={(rewardState) => setRewardState('reward')} count={counter}/>  
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
    button: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: '150%',
        borderRadius: normalize(35),
        top: '155%',
        left: '78%'
      },
      button1pressed:{
        position: "absolute",
        backgroundColor: "grey",
        aspectRatio: 1 / 1,
        height: '150%',
        borderRadius: normalize(35),
        top: '155%',
        left: '78%'
      },
      button2: {
      }
});

export default One;