import React from "react";
import { SafeAreaView, ScrollView, Dimensions, StyleSheet, View, Image, TouchableOpacity} from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import ButtonsMenu from "../components/ButtonsMenu"
import BackButton from "../components/BackButton"
import DigitsButtonsMenu from "../components/DigitsButtonsMenu"
import One from "../components/One";
import Balloons from "../animations/Balloons";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const isMobile = windowWidth <= 812 && true;

const LearningDigitsMenuScreen = ({navigation, route}) => {
  React.useEffect(
    () => navigation.addListener('blur', () => route.params.pause()),
    []
  );

  React.useEffect(
    () => navigation.addListener('focus', () => route.params.play()),
    []
  );

    return <View style={{height: '100%', width: '100%'}}>
          <Image style={{zIndex: 1, height: "30%", width: '100%', alignSelf: "center"}} resizeMode="contain" source={require('../../assets/header.png')}/>
        <ButtonsMenu resize="contain" source={require("../../assets/kid1.png")} style={styles.buttonMenu1} navigate={() => navigation.navigate('LearningDigits', {init: 0})}/>
        <ButtonsMenu resize="contain" source={require("../../assets/kid2.png")} style={styles.buttonMenu2} navigate={() => navigation.navigate('LearningDigits', {init: 1})}/>
        <ButtonsMenu resize="contain" source={require("../../assets/kid3.png")} style={styles.buttonMenu3} navigate={() => navigation.navigate('LearningDigits', {init: 2})}/>
        <ButtonsMenu resize="contain" source={require("../../assets/kid4.png")} style={styles.buttonMenu4} navigate={() => navigation.navigate('LearningDigits', {init: 3})}/>
        <ButtonsMenu resize="contain" source={require("../../assets/kid5.png")} style={styles.buttonMenu5} navigate={() => navigation.navigate('LearningDigits', {init: 4})}/>
        <ButtonsMenu resize="contain" source={require("../../assets/kid6.png")} style={styles.buttonMenu6} navigate={() => navigation.navigate('LearningDigits', {init: 5})}/>
        <ButtonsMenu resize="contain" source={require("../../assets/kid7.png")} style={styles.buttonMenu7} navigate={() => navigation.navigate('LearningDigits', {init: 6})}/>
        <ButtonsMenu resize="contain" source={require("../../assets/kid8.png")} style={styles.buttonMenu8} navigate={() => navigation.navigate('LearningDigits', {init: 7})}/>
        <ButtonsMenu resize="contain" source={require("../../assets/kid9.png")} style={styles.buttonMenu9} navigate={() => navigation.navigate('LearningDigits', {init: 8})}/>
        <BackButton onPress={() => navigation.goBack()}/>  
     <Balloons style={styles.bgimage}/>
    </View>

};

const styles = StyleSheet.create({
  buttonMenu1: {
    aspectRatio: 1 / 1,
    height: '20%',
    borderRadius: 20,
    zIndex: 1,
    borderWidth: 1,
    left: isMobile? "15%" : "15%", 
    top: isMobile? "30%" : "26%",
    position: "absolute"
  },
  buttonMenu2: {
    aspectRatio: 1 / 1,
    height: '20%',
    borderRadius: 20,
    zIndex: 1,
    borderWidth: 1,
    left: isMobile? "35%" : "40%", 
    top: isMobile? "30%" : "26%",
    position: "absolute"
  },
  buttonMenu3: {
    aspectRatio: 1 / 1,
    height: '20%',
    borderRadius: 20,
    zIndex: 1,
    borderWidth: 1,
    left: isMobile? "55%" : "65%", 
    top: isMobile? "30%" : "26%",
    position: "absolute"
  },
  buttonMenu4: {
    aspectRatio: 1 / 1,
    height: '20%',
    borderRadius: 20,
    zIndex: 1,
    borderWidth: 1,
    left: isMobile? "75%" : "15%", 
    top: isMobile? "30%" : "50%",
    position: "absolute"
  },
  buttonMenu5: {
    aspectRatio: 1 / 1,
    height: '20%',
    borderRadius: 20,
    zIndex: 1,
    borderWidth: 1,
    left: isMobile? "5%" : "40%", 
    top: isMobile? "63%" : "50%", 
    position: "absolute"
  },
  buttonMenu6: {
    aspectRatio: 1 / 1,
    height: '20%',
    borderRadius: 20,
    zIndex: 1,
    borderWidth: 1,
    left: isMobile? "25%" : "65%", 
    top: isMobile? "63%" : "50%", 
    position: "absolute"
  },
  buttonMenu7: {
    aspectRatio: 1 / 1,
    height: '20%',
    borderRadius: 20,
    zIndex: 1,
    borderWidth: 1,
    left: isMobile? "45%" : "15%", 
    top: isMobile? "63%" : "74%", 
    position: "absolute"
  },
  buttonMenu8: {
    aspectRatio: 1 / 1,
    height: '20%',
    borderRadius: 20,
    zIndex: 1,
    borderWidth: 1,
    left: isMobile? "65%" : "40%", 
    top: isMobile? "63%" : "74%", 
    position: "absolute"
  },
  buttonMenu9: {
    aspectRatio: 1 / 1,
    height: '20%',
    borderRadius: 20,
    zIndex: 1,
    borderWidth: 1,
    left: isMobile? "85%" : "65%", 
    top: isMobile? "63%" : "74%", 
    position: "absolute"
  },
  text: {
    fontSize: 30,
    textAlign: 'center'
  },
  bgimage: {
    position: "relative",
    flex: 1,
  }
});

export default LearningDigitsMenuScreen;