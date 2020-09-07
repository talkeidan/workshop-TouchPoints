import React, {useState, useEffect} from "react";
import { Button, StyleSheet, View, Dimensions, ImageBackground} from "react-native";
import normalize from "react-native-normalize";
import HomeButton from "../components/HomeButton";
import NextButton from "../components/NextButton";
import One from "../components/One";
import Two from "../components/Two";
import Three from "../components/Three";
import Four from "../components/Four";
import Five from "../components/Five";
import Six from "../components/Six";
import Seven from "../components/Seven";
import Eight from "../components/Eight";
import Nine from "../components/Nine";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height - 60;

const patterns = [
  { name: <One isNaked={false}></One>},
  { name: <Two isNaked={false}></Two>},
  { name: <Three isNaked={false}></Three>},
  { name: <Four isNaked={false}></Four>},
  { name: <Five isNaked={false}></Five>},
  { name: <Six isNaked={false}></Six>},
  { name: <Seven isNaked={false}></Seven>},
  { name: <Eight isNaked={false}></Eight>},
  { name: <Nine isNaked={false}></Nine>},
];

const LearningDigitsScreen = ({ navigation, route }) => {

    const [stage, setStage] = useState(patterns[route.params.init]);
    const [counter, setCounter] = useState(route.params.init);

    return <ImageBackground style={styles.bgimage} source={require("../../assets/playground.jpg")} resizeMode="cover"> 
            <HomeButton onPress={() => {navigation.navigate('Home')}}/>
            {stage.name}
            <NextButton onPress={() => {
              if (counter >= patterns.length - 1)
              {
                  navigation.navigate('LearningDigitsMenu');//in case of 9
              }
              else
              {
                  setStage(patterns[counter + 1]);
                  setCounter(counter + 1)
            }}}/>
        </ImageBackground>
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
  },
  points: {
    alignSelf: "center",
    backgroundColor: "black",
    aspectRatio: 1 / 1,
    height: '45%',
    top: "110%",
    left: "2%"
},
  bgimage: {
    position: "relative",
    height: '100%',
    width: '100%',
  },
  home: {
    position: "absolute",
    left: '0%',
    top: '-4%',
    zIndex: 1
}
});

export default LearningDigitsScreen;