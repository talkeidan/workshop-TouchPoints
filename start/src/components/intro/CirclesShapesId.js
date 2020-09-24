import React, {useState} from "react";
import { Dimensions,TouchableWithoutFeedback, Button, Text, StyleSheet, View, Image, ImageBackground, TouchableOpacity} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RewardsComponent from 'react-native-rewards';
import normalize from "react-native-normalize";
import { render } from "react-dom";
import { color } from "react-native-reanimated";
import LineHorizontal from "./LineHorizontal";
import LineVertical from "./LineVertical";
import Circle from "./Circle";
import Confetti from "../../animations/Confetti";
import { Video, Audio } from 'expo-av';


const windowWidth = Dimensions.get('window').width;
const isMobile = windowWidth <= 812 && true;

const CirclesShapesId = ({enableNext}) => {
  const [counter, setCounter] = useState(3);
  const [rewardState, setRewardState] = useState('rest');

  return <View style={styles.mainContainer}>
           <Confetti rewardState={rewardState}/>
           <ImageBackground style={styles.bgimagebicycle} source={rewardState == 'reward' ? require("../../../assets/bicycle.png") : require("../../../assets/bicycle.png")} resizeMode="contain">
           <Circle style={styles.Circle1} count={counter} setCounter={() => setCounter(counter-1)} setRewardState={() => {
             if (enableNext != null) {
              enableNext();
            }
             setRewardState('reward')}} flag = {true}/>
           <Circle style={styles.Circle2} count={counter} setCounter={() => setCounter(counter-1)} setRewardState={() => {
             if (enableNext != null) {
              enableNext();
            }
             setRewardState('reward')}} flag = {true}/>
          </ImageBackground> 
          <ImageBackground style={styles.bgimagesun} source={rewardState == 'reward' ? require("../../../assets/sun.png") : require("../../../assets/sun.png")} resizeMode="contain">
           <Circle style={styles.Circle3} count={counter} setCounter={() => setCounter(counter-1)} setRewardState={() => {
             if (enableNext != null) {
              enableNext();
            }
             setRewardState('reward')}} flag = {true}/>
          </ImageBackground> 
            </View>
}

const styles = StyleSheet.create({
mainContainer: {
  width: '100%',
  flex: 1,
},
bgimagebicycle: {
 position:"absolute",
  borderRadius: 20,
  height: isMobile? "75%": "75%",
  aspectRatio: 1/1,
  left: isMobile ? '5%' : '0%',
  top: isMobile ? "20%" : '30%',
  direction: 'ltr',
},
bgimagesun: {
 position:"absolute",
  borderRadius: 20,
  height:  isMobile? "90%": "90%",
  aspectRatio: 1/1,
  left: isMobile ? '50%' : '40%',
  top: isMobile ? "20%" : '0%',
  direction: 'ltr',
},

Circle1: {
  position: "absolute",
  width: isMobile? "100%" : "100%",
  top: isMobile? "39%" : "40%",
  left: isMobile? "5%" : "7%",
 

},
Circle2: {
  position: "absolute",
  width: isMobile? "100%" : "100%",
  top: isMobile? "40%" : "42%",
  left: isMobile? "58%" : "60%",
},
Circle3: {
  position: "absolute",
  width: isMobile? "100%" : "100%",
  top: isMobile? "30%" : "30%",
  left: isMobile? "37%" : "37%",
},
});

export default CirclesShapesId;