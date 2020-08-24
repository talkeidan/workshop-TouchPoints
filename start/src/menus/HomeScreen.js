import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, ImageBackground} from "react-native";
import ButtonsMenu from "../components/ButtonsMenu"
import { Entypo } from "@expo/vector-icons";
import { Col, Row, Grid } from "react-native-easy-grid";
import normalize from "react-native-normalize";

const HomeScreen = ({navigation}) => {
  return <ImageBackground style={styles.bgimage} source={require("../../assets/stars.png")} resizeMode="cover">
  <Grid style={{flex: 1}}>
    <Row style= {styles.list1}>
      <ButtonsMenu title = "מבוא" navigate = {() => navigation.navigate('Intro')}/>
      <ButtonsMenu title = "לימוד ספרות" navigate = {() => navigation.navigate('LearningDigitsMenu')}/>
      <ButtonsMenu title = "זיהוי ספרות" navigate = {() => navigation.navigate('IdentifyDigits')}/>
    </Row>
    <Row style={styles.list2}>
        <TouchableOpacity style={styles.infoStyle} onPress={() => navigation.navigate('AppInfo')}>
         <Entypo name="info-with-circle" style={styles.infoIcon}/>
        </TouchableOpacity>
      <ButtonsMenu title = "חיבור תאומים" navigate= {() => navigation.navigate('AddingTwins')}/>
      <ButtonsMenu title = "חיבור ספרות שונות" navigate= {() => navigation.navigate('AddingNumbers')}/>
    </Row>
  </Grid>
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
    marginBottom: "10%",
  },
  infoIcon: {
      fontSize: normalize(30),
  },
  infoStyle: {
      position: "absolute",
      top: "100%",
      left: "2%"
  },
  bgimage: {
    position: "relative",
    flex: 1,
  }
});

export default HomeScreen;

/*import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import joey from './assets/joey.png';
import { Col, Row, Grid } from "react-native-easy-grid";

export default function App() {
  return (
    <Grid>
      <Row style={{ justifyContent: "space-evenly", marginTop: "5%", alignItems: "flex-end"}}>
      <Image source={joey} style={{width:"20%", height:"60%", borderRadius:200, borderWidth:10, borderColor:'#994d00'}}/>
      <Image source={joey} style={{width:"20%", height:"60%", borderRadius:200, borderWidth:10, borderColor:'#994d00'}}/>
      <Image source={joey} style={{width:"20%", height:"60%", borderRadius:200, borderWidth:10, borderColor:'#994d00'}}/>
      </Row>
      <Row style={{ justifyContent: "space-evenly", marginTop: "5%", alignItems: "flex-start"}}>
      <Image source={joey} style={{width:"10%", height:"30%", borderRadius:100, borderWidth:5, borderColor:'#994d00', position: "absolute", left: "5%", bottom: "16%"}}/>
      <Image source={joey} style={{width:"20%", height:"60%", borderRadius:200, borderWidth:10, borderColor:'#994d00'}}/>
      <Image source={joey} style={{width:"20%", height:"60%", borderRadius:200, borderWidth:10, borderColor:'#994d00'}}/>
      </Row>
    </Grid>
    // <View style={styles.container}>
    //   <Text style={{color:'gray', fontSize: 40}}>hello Joey!</Text>
    //   <Image source={joey} style={{width:305, height:400, borderRadius:200, borderWidth:10, borderColor:'#994d00'}}/>
    //</View>
  );
}

const styles = StyleSheet.create({//background style
  container: {
    flex: 1,
    backgroundColor: '#99ffeb',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/