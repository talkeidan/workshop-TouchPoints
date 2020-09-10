import React, {useState, useEffect} from "react";
import { Text, StyleSheet, View, TouchableOpacity,ImageBackground, Dimensions} from "react-native";
import HomeButton from "../components/HomeButton";
import NextButton from "../components/NextButton";
import Confetti from "../animations/Confetti";
import NumbersLine from "../components/NumbersLine";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const isMobile = windowWidth <= 812 && true;

const AddingTwinsScreen = ({navigation, route}) => {
    const [counter, setCounter] = useState(0);
    const [rewardState, setRewardState] = useState('rest');

    return <View style={styles.mainContainer}> 
    <ImageBackground style={styles.bgimage} source={require("../../assets/addingFace.jpg")} resizeMode="contain"> 
        <Confetti rewardState={rewardState}/>
        <HomeButton onPress= {() => {navigation.navigate('Home')}}/>
        <View style={styles.addContainerLeft}>
        {route.params.arr[counter].digit}
        </View>
        <View style={styles.addContainer}>
        {route.params.arr[counter].digit}
        </View>
        <NextButton onPress= {() => {
            if (counter >= 3)
            {
                navigation.navigate('Home');
            }
            else
            {
                setCounter(counter + 1);
                setRewardState('rest');
            }
        }}/>
        <NumbersLine result={route.params.arr[counter].value.toString()} setRewardState={() => setRewardState('reward')}/>
        </ImageBackground>
        </View>
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#01dbca"
  },
  bgimage: {
    position: "relative",
    height: '100%',
    width: '100%',
    backgroundColor: "#01dbca",
    flex: 0.8,
  },
  addContainer: {
    position: "absolute",
    width: isMobile? "15%" : "25%",
    aspectRatio: 1/1,
    borderRadius: 150,
    backgroundColor: "pink",
    top: isMobile? "22%" : "22%",
    left: isMobile? "52%" : "54%",
},
addContainerLeft: {
  position: "absolute",
  width: isMobile? "15%" : "25%",
  aspectRatio: 1/1,
  borderRadius: 150,
  backgroundColor: "pink",
  top: isMobile? "22%" : "22%",
  left: isMobile? "32%" : "21%",
}
});

export default AddingTwinsScreen;