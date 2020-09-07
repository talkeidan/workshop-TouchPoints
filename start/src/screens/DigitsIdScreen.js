import React, {useState, useEffect} from "react";
import { Dimensions, StyleSheet,  ImageBackground} from "react-native";
import normalize from "react-native-normalize";
import HomeButton from "../components/HomeButton";
import NextButton from "../components/NextButton";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const isMobile = windowWidth <= 812 && true;

const DigitsIdScreen = ({navigation, route}) => {
    const [counter, setCounter] = useState(0);

    return <ImageBackground style={styles.bgimage} source={require("../../assets/playground.jpg")} resizeMode="cover"> 
            <HomeButton onPress={() => {navigation.navigate('Home')}}/>
            {route.params.arr[counter].name}
            <NextButton onPress={() => {
              if (counter >= 8)
              {
                  navigation.navigate('Home');//in case of 9
              }
              else
              {
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
    height: windowHeight,
    width: windowWidth,
    flex: 1
  },
  home: {
    position: "absolute",
    left: '0%',
    top: '-4%',
    zIndex: 1
}
});

export default DigitsIdScreen;