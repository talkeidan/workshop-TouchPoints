import React, {useState} from "react";
import { Text, StyleSheet, View, TouchableOpacity,ImageBackground, Image} from "react-native";
import normalize from "react-native-normalize";
import HomeButton from "../components/HomeButton";
import NextButton from "../components/NextButton";
import OneTwins from "../components/twins/OneTwins";


const patterns = [
   { name: <OneTwins></OneTwins>},
];

const AddingTwinsScreen = ({navigation}) => {
    const [stage, setStage] = useState(patterns[0]);
    const [counter, setCounter] = useState(0);


    return <View style={styles.mainContainer}> 
    <ImageBackground style={styles.bgimage} source={require("../../assets/addingFace.jpg")} resizeMode="contain"> 
        <HomeButton onPress= {() => {navigation.navigate('Home')}}/>
        {stage.name}
        <NextButton onPress= {() => {
            if (counter >= patterns.length - 1)
            {
                navigation.navigate('Home');
            }
            else
            {
                setStage(patterns[counter + 1]); {/*add limit to the counter, when counter reaches the end of the list go to previous screen*/}
                setCounter(counter + 1)
            }
        }}/>
        </ImageBackground>
        </View>
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#01dbca"
  },
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
  bgimage: {
    position: "relative",
    height: '100%',
    width: '100%',
    backgroundColor: "#01dbca",
    flex: 0.8,
  }
});

export default AddingTwinsScreen;