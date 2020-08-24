import React, {useState, useEffect} from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image} from "react-native";
import ButtonsMenu from "../components/HomeButton"
import { Col, Row, Grid } from "react-native-easy-grid";
import normalize from "react-native-normalize";
import HomeButton from "../components/HomeButton";
import NextButton from "../components/NextButton";

const patterns = [
    { source: require("../../assets/linescircles1.jpg")},
    { source: require("../../assets/linescircles2.jpg")}
];

const CirclesLinesIdScreen = ({navigation}) => {
    const [stage, setStage] = useState(patterns[0]);
    const [counter, setCounter] = useState(0);
    
    return <Row>
        <HomeButton navigate= {() => navigation.navigate('Home')}/>
        <Image source={stage.source}/>
        <NextButton onPress= {() => {
            if (counter >= patterns.length - 1)
            {
                navigation.navigate('Intro');
            }
            else
            {
                setStage(patterns[counter + 1]); {/*add limit to the counter, when counter reaches the end of the list go to previous screen*/}
                setCounter(counter + 1)
            }
        }}/>
        </Row>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center'
  },
  list1: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: "center",
  },
  list2: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: "center",
    marginBottom: "10%"
  },
  infoIcon: {
      fontSize: normalize(30),
      alignSelf: "flex-start"
  },
  infoStyle: {
      position: "absolute",
      top: "100%",
      left: "2%"
  }
});

export default CirclesLinesIdScreen;