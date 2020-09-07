import React, {useState} from "react";
import { Button, Text, StyleSheet, View, Image, ImageBackground, TouchableOpacity} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import LineHorizontal from "./LineHorizontal";
import Confetti from "../../animations/Confetti";
import Circle from "./Circle";


const CirclesShapesId = () => {
  const [counter, setCounter] = useState(1);
  const [rewardState, setRewardState] = useState('rest');

  return <View style={{alignItems: 'center', display: 'flex',height: '100%', width: '100%', position: 'relative'}}>
           <Confetti rewardState={rewardState}/>
           <Text style = {styles.Text}>מצאו את העיגולים </Text>
           <ImageBackground style={styles.bgimageface} source={require("../../../assets/circle-kid.png")} resizeMode="contain" >
           <Circle style={styles.Circle1} count={counter} setCounter={() => setCounter(counter-1)} setRewardState={() => setRewardState('reward')} flag = {true}/>
           </ImageBackground>
           <ImageBackground style={styles.bgimagecroc} source={require("../../../assets/croc-left.png")} resizeMode="contain" >
           <LineHorizontal style={styles.LineHorizontal1} count={null} setCounter={() =>{null}} setRewardState={null} flag = {false}/>
           </ImageBackground>

           
            </View>
}

const styles = StyleSheet.create({
  Text: {
    fontSize:15,
    color: "#002266", 
    fontWeight: 'bold'
},
bgimageface:{
    position: "relative",
    marginTop: "6%",
    padding: "5%",
    borderRadius: 20,
    height: hp('50%'),
    width: wp('40%'),
    top:50,
    left:230,
    flex: 1,
    shadowColor: "#36393d",
    shadowOffset: { width: 1 },
    elevation: 20,
    shadowRadius: 5,
    shadowOpacity: 1,
},
bgimagecroc:{
    position: "relative",
    marginTop: "6%",
    padding: "5%",
    borderRadius: 20,
    height: hp('50%'),
    width: wp('40%'),
    top:-200,
    left:-100,
    flex: 1,
    shadowColor: "#36393d",
    shadowOffset: { width: 1 },
    elevation: 20,
    shadowRadius: 5,
    shadowOpacity: 1,
},
    LineHorizontal1: {
        position: "absolute",
        height:100,
        top: 85,
        left: 70
      },
      Circle1: {
        position: "absolute",
        height: 90,
        width: 90,
        top: 15,
        left: 130
      },
});

export default CirclesShapesId;