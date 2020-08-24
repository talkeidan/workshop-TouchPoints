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


const LinesAndCirclesId = () => {
  const [counter, setCounter] = useState(5);
  const [rewardState, setRewardState] = useState('rest');

  return <View style={{alignItems: 'center', display: 'flex',height: '100%', width: '100%', position: 'relative'}}>
          <Confetti rewardState={rewardState}/>
           <Text style = {styles.Text}>מצאו את העיגולים והקווים השוכבים </Text>
           <LineHorizontal style={styles.LineHorizontal1} count={counter} setCounter={() => setCounter(counter-1)} setRewardState={() => setRewardState('reward')} flag = {true}/>
           <LineHorizontal style={styles.LineHorizontal2} count={counter} setCounter={() => setCounter(counter-1)} setRewardState={() => setRewardState('reward')} flag = {true}/>
           <LineHorizontal style={styles.LineHorizontal3} count={counter} setCounter={() => setCounter(counter-1)} setRewardState={() => setRewardState('reward')} flag = {true}/>
           <LineVertical style={styles.LineVertical1}/>
           <LineVertical style={styles.LineVertical2}/>
           <Circle style={styles.Circle1} count={counter} setCounter={() => setCounter(counter-1)} setRewardState={() => setRewardState('reward')} flag = {true}/>
           <Circle style={styles.Circle2} count={counter} setCounter={() => setCounter(counter-1)} setRewardState={() => setRewardState('reward')} flag = {true}/>
          </View>
}

const styles = StyleSheet.create({
    Text: {
        fontSize:15,
        color: "#002266", 
        fontWeight: 'bold'
    },
    Circle1: {
        position: "absolute",
        //backgroundColor: "black",
        //aspectRatio: 1 /1,
        //width:50,
        height: 100,
        width: 100,
      //  borderRadius: normalize(2000),
        top: 150,
        left: 20

      },
      LineHorizontal2: {
        position: "absolute",
        //backgroundColor: "black",
        //aspectRatio: 1 /1,
        //width:50,
        height: 100,
        //borderRadius: normalize(2000),
        top: 10,
        left: 150

      },
      LineHorizontal3: {
        position: "absolute",
        //backgroundColor: "black",
        //aspectRatio: 1 /1,
        //width:50,
        height: 100,
      //  borderRadius: normalize(2000),
        top: 200,
        left: 450

      },
      Circle2: {
        position: "absolute",
        //backgroundColor: "black",
        //aspectRatio: 1 /1,
        //width:50,
        height: 100,
        width: 100,
      //  borderRadius: normalize(2000),
        top: 20,
        left: 400
        
      },
      LineVertical2: {
        position: "absolute",
        //backgroundColor: "black",
        //aspectRatio: 1 /1,
        //width:50,
        //height: 100,
        //width: 15,
      //  borderRadius: normalize(2000),
        top: 180,
        left: 0
      },
      LineHorizontal1: {
        position: "absolute",
        //backgroundColor: "black",
        //aspectRatio: 1 /1,
        //width:50,
        height: 100,
      //  borderRadius: normalize(2000),
        top: 100,
        left: 50
      },
      LineVertical1: {
        position: "absolute",
        //backgroundColor: "black",
        //aspectRatio: 1 /1,
        //width:50,
        //height: 100,
        //width: 15,
      //  borderRadius: normalize(2000),
        top: 170,
        left: 300
      },

});

export default LinesAndCirclesId;