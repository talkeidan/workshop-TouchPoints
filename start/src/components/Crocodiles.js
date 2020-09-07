import React, {useState, useEffect} from "react";
import { StyleSheet, View, Dimensions, Image, ImageBackground } from "react-native";
import Draggable from 'react-native-draggable';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import normalize from "react-native-normalize";
import Point from "./Point";
import Confetti from "../animations/Confetti";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const isMobile = windowWidth <= 812 && true; 
const Crocodiles = ({isLeftBigger, setReward, reward}) => {
    const [isLeftComplete, setIsLeftComplete] = useState(false);
    const [isRightComplete, setIsRightComplete] = useState(false);
    const [imageSource, setImageSource] = useState("");

    if (reward == 'rest') {
        return <View style={{height: "100%", width: "100%"}}>
        <View style={{alignSelf: "center", marginTop: isMobile? "15%" : "20%", height: "30%", width: "40%", borderWidth: 1}}/>
    <Draggable shouldReverse={true} x={windowWidth * 0.6} y={windowHeight * 0.58} onDragRelease={(event, gestureState) => {
        if (gestureState.moveX >= 420 && gestureState.moveX <= 600 && gestureState.moveY >= 235 && gestureState.moveY <= 460 && isLeftBigger) {
            setReward();
            setImageSource(require("../../assets/croc-right.png"));
            setIsLeftComplete(true);
        }
    }}>
        <Image resizeMode="contain" style={styles.image} source={require("../../assets/croc-right.png")}/>
    </Draggable>
    <Draggable shouldReverse={true} x={windowWidth * 0.02} y={windowHeight * 0.58} onDragRelease={(event, gestureState) => {
        if (gestureState.moveX >= 420 && gestureState.moveX <= 600 && gestureState.moveY >= 235 && gestureState.moveY <= 460 && !isLeftBigger) {
            setReward();
            setImageSource(require("../../assets/croc-left.png"));
            setIsRightComplete(true);
        }
    }}>
        <Image resizeMode="contain" style={styles.image} source={require("../../assets/croc-left.png")}/>
    </Draggable>
    </View>
    }

    if (isLeftComplete || isRightComplete) {
        return <View style={{height: "100%", width: "100%"}}>
        <View style={{alignSelf: "center", marginTop: isMobile? "15%" : "20%", borderWidth: 1, height: "30%", width: "40%"}}>
        <Image resizeMode="contain" style={styles.imageAfter} source={imageSource}/>
            </View>
    </View>
    }
    return;
}

const styles = StyleSheet.create({
    image: {
        aspectRatio: 1/1,
        height: isMobile? 220 : 400
    },
    imageAfter: {
        aspectRatio: 1/1,
        height: isMobile? 220 : 400,
        alignSelf: "center",
        bottom: "30%"
    }
});

export default Crocodiles;