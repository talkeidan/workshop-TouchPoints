import React, {useState} from "react";
import { TouchableWithoutFeedback, Button, Text, StyleSheet, View, Image, ImageBackground, TouchableOpacity} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RewardsComponent from 'react-native-rewards';
import normalize from "react-native-normalize";
import { render } from "react-dom";
import { color } from "react-native-reanimated";
import LineHorizontal from "./LineHorizontal";
import LineVertical from "./LineVertical";
import Circle from "./Circle";
import Confetti from "../../animations/Confetti";


const MemoryLine = () => {//צריך לשנות - להוריד את הקו ולהוסיף נקודות
  const [counter, setCounter] = useState(1);
  const [rewardState, setRewardState] = useState('rest');

  return <View style={{alignItems: 'center', display: 'flex',height: '100%', width: '100%', position: 'relative'}}>
          <Confetti rewardState={rewardState}/>   
           <ImageBackground style={styles.bgimage} source={require("../../../assets/swing.jpg")} resizeMode="contain" >
           <LineHorizontal style={styles.LineHorizontal1} count={counter} setCounter={() => setCounter(counter-1)} setRewardState={() => setRewardState('reward')} flag = {true}/>
           </ImageBackground>           
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
    height: hp('50%'),
    width: wp('40%'),
    //top:-200,
    //sleft:-100,
    flex: 1,
    shadowColor: "#36393d",
    shadowOffset: { width: 1 },
    elevation: 20,
    shadowRadius: 5,
    shadowOpacity: 1,

},
    LineHorizontal1: {
        position: "absolute",
        //backgroundColor: "black",
        //aspectRatio: 1 /1,
        //width:50,
        height: 100,
        width: 270,
      //  borderRadius: normalize(2000),
        top: -10,
        left: 0,
        zIndex:1

      },


});

export default MemoryLine;