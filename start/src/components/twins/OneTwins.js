import React, {useState, useEffect, useRef} from "react";
import { TouchableWithoutFeedback, Button, Text, StyleSheet, View, Image, ImageBackground, Dimensions} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import normalize from "react-native-normalize";
import Point from "../Point";
import * as Animatable from 'react-native-animatable';
import Confetti from "../../animations/Confetti";
import NumbersLine from "../NumbersLine";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const isMobile = windowWidth <= 812 && true;

const OneTwins = ({onPress, isNaked}) => {
    const [counter, setCounter] = useState(10);
    const [ isPress, setIsPress ] = useState(false);
    const [rewardState, setRewardState] = useState('rest');
    console.log(rewardState);

    return <View style={styles.mainContainer}>
        <Confetti rewardState={rewardState}/>

         <Text style={styles.Text1}>+</Text>
         <Text style={styles.Text2}>=</Text>
        <ImageBackground style={styles.bgimage} source={require("../../../assets/number1.png")} resizeMode="contain" >
            <Point 
            unpressedStyle={isNaked? styles.transButton : styles.button} 
            pressedStyle={isNaked? styles.button : {}}
            setCounter={() => setCounter(counter - 1)} 
            setRewardState={null} 
            count={counter}/>
        </ImageBackground>
        <ImageBackground style={styles.bgimage2} source={require("../../../assets/number1.png")} 
            resizeMode="contain"
            >
            <Point 
            unpressedStyle={isNaked? styles.transButton : styles.button2} 
            pressedStyle={isNaked? styles.button2 : {}}
            setCounter={() => setCounter(counter - 1)} 
            setRewardState={null} 
            count={counter}/>
        </ImageBackground>
        <NumbersLine result="2" setRewardState={(rewardState) => setRewardState('reward')}>

        </NumbersLine>

    </View>
    {/*return <View style={styles.mainContainer}>
        <ImageBackground style={styles.bgimage} source={require("../../assets/kid1.png")} resizeMode="contain">
            <Confetti rewardState={rewardState}/>
            <Point unpressedStyle={styles.button} setCounter={() => setCounter(counter - 1)} setRewardState={(rewardState) => setRewardState('reward')} count={counter}/>
        </ImageBackground>
</View>*/}
}

const styles = StyleSheet.create({
    mainContainer: {
        width: windowWidth,
        height: windowHeight,
        //display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        position:'relative'
    },
      bgimage:{
        flex: 1,
          position: "absolute",
          marginTop: "2%",
          borderRadius: 20,
          height: hp('20%'),
          width: isMobile? wp('40%') : wp('90%'),
          top: isMobile? wp('15%') : wp('90%'),
          left: isMobile? wp('17%') : wp('90%'),
          shadowColor: "#36393d",
          shadowOffset: { width: 1 },
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
        left: isMobile? "55%" : '70%',
        top: isMobile? '0%': '8%'

      },
      bgimage2:{
        flex: 1,
          position: "absolute",
          marginTop: "2%",
          borderRadius: 20,
          height: hp('20%'),
          width: isMobile? wp('40%') : wp('90%'),
          top: isMobile? wp('15%') : wp('90%'),
          left: isMobile? wp('37%') : wp('90%'),
          shadowColor: "#36393d",
          shadowOffset: { width: 1 },
          shadowRadius: 5,
          shadowOpacity: 1,
          direction: 'ltr',
      },
    button2: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: '13%',
        borderRadius: normalize(35),
        left: isMobile? "55%" : '70%',
        top: isMobile? '0%': '8%'

      },
      Text1: {
        fontSize:isMobile? 60: 50,
        color: "black", 
        fontWeight: 'bold',
        left: isMobile? "0%" : '70%',
        top: isMobile? '8%': '8%'


      },
      Text2: {
        fontSize:isMobile? 60: 50,
        color: "black", 
        fontWeight: 'bold',
        left: isMobile? "0%" : '70%',
        top: isMobile? '0%': '8%'

      },
});

export default OneTwins;