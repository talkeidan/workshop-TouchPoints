import React, {useState, useEffect, useRef} from "react";
import { TouchableWithoutFeedback, Button, Text, StyleSheet, View, Image, ImageBackground, Dimensions} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import normalize from "react-native-normalize";
import Point from "./Point";
import * as Animatable from 'react-native-animatable';
import Confetti from "../animations/Confetti";

const windowWidth = Dimensions.get('window').width;
const isMobile = windowWidth <= 812 && true;

const One = ({onPress}) => {
    const [counter, setCounter] = useState(1);
    const [ isPress, setIsPress ] = useState(false);
    const [rewardState, setRewardState] = useState('rest');
        

    return <View style={styles.mainContainer}>
        <ImageBackground style={styles.bgimage} source={require("../../assets/kid1.png")} resizeMode="contain">
            <Confetti rewardState={rewardState}/>
            <Point unpressedStyle={styles.button} setCounter={() => setCounter(counter - 1)} setRewardState={(rewardState) => setRewardState('reward')} count={counter}/>
        </ImageBackground>
    </View>
    {/*return <View style={styles.mainContainer}>
        <ImageBackground style={styles.bgimage} source={require("../../assets/kid1.png")} resizeMode="contain">
            <Confetti rewardState={rewardState}/>
            <Point unpressedStyle={styles.button} setCounter={() => setCounter(counter - 1)} setRewardState={(rewardState) => setRewardState('reward')} count={counter}/>
        </ImageBackground>
</View>*/}
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
    bgimage: {
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
    button: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: '13%',
        borderRadius: normalize(35),
        left: isMobile? '60%' : '65%',
        top: isMobile? '8%' : '8%'

      },
      wrong: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: '13%',
        borderRadius: normalize(35),
        left: isMobile? '60%' : '80%',
        top: isMobile? '8%' : '8%'
      },
      wrong2: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: '13%',
        borderRadius: normalize(35),
        left: isMobile? '60%' : '80%',
        top: isMobile? '8%' : '8%'
      }
});

export default One;