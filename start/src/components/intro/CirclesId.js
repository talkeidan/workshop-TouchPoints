import React, {useState} from "react";
import { Text, StyleSheet, View, Image, ImageBackground, TouchableOpacity} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import LineVertical from "./LineVertical";
import Circle from "./Circle";
import Confetti from "../../animations/Confetti";
import WrongLineHorizontal from "./WrongLineHorizontal";

const CirclesId = () => {
  const [counter, setCounter] = useState(2);
  const [rewardState, setRewardState] = useState('rest');

    return <View style={{alignItems: 'center', display: 'flex',height: '100%', width: '100%', position: 'relative'}}>
          <Confetti rewardState={rewardState}/>
           <Text style = {styles.Text}>מצאו את העיגולים </Text>
           <WrongLineHorizontal style={styles.LineHorizontal1}/>
           <WrongLineHorizontal style={styles.LineHorizontal2}/>
           <WrongLineHorizontal style={styles.LineHorizontal3}/>
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
        fontWeight: 'bold', 
    },
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
    Circle1: {
        position: "absolute",
        height: 100,
        width: 100,
        top: 150,
        left: 20,
      },
      LineHorizontal2: {
        position: "absolute",
        height: 100,
        top: 10,
        left: 150
      },
      LineHorizontal3: {
        position: "absolute",
        height: 100,
        top: 200,
        left: 450
      },
      Circle2: {
        position: "absolute",
        height: 100,
        width: 100,
        top: 20,
        left: 400,
      },
      LineVertical2: {
        position: "absolute",
        top: 180,
        left: 0
      },
      LineHorizontal1: {
        position: "absolute",
        height: 100,
        top: 100,
        left: 50
      },
      LineVertical1: {
        position: "absolute",
        top: 170,
        left: 300
      },
});

export default CirclesId;