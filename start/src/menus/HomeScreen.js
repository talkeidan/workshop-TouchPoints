import React, {useState} from "react";
import { StyleSheet, View, TouchableOpacity, Image, Dimensions} from "react-native";
import ButtonsMenu from "../components/ButtonsMenu"
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { Col, Row, Grid } from "react-native-easy-grid";
import normalize from "react-native-normalize";
import { Video, Audio } from 'expo-av';
import One from "../components/One";
import Two from "../components/Two";
import Three from "../components/Three";
import Four from "../components/Four";
import Five from "../components/Five";
import Six from "../components/Six";
import Seven from "../components/Seven";
import Eight from "../components/Eight";
import Nine from "../components/Nine";
import Balloons from "../animations/Balloons";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const isMobile = windowWidth <= 812 && true;

const digits = [
  { name: <One isNaked={true}></One>},
  { name: <Two isNaked={true}></Two>},
  { name: <Three isNaked={true}></Three>},
  { name: <Four isNaked={true}></Four>},
  { name: <Five isNaked={true}></Five>},
  { name: <Six isNaked={true}></Six>},
  { name: <Seven isNaked={true}></Seven>},
  { name: <Eight isNaked={true}></Eight>},
  { name: <Nine isNaked={true}></Nine>},
];

const shuffleDeck = (array) => {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

export default HomeScreen = ({navigation}) =>
{
  const [isPlay, setIsPlay] = useState(true);
  const [isMute, setIsMute] = useState(false);

  const music = <Video
  source={require("../../assets/playground.mp3")}
  shouldPlay={isPlay && !isMute}
  isLooping={true}
  volume={0.1}
  useNativeControls ={false}
/>

React.useEffect(
  () => navigation.setOptions({headerRight: () => <TouchableOpacity style={{marginEnd: 10}} onPress={() => {
    setIsMute(!isMute)
  }}>
    <Octicons style={styles.mute} name={isMute? "unmute" : "mute"} size={28} color="white"/>
  </TouchableOpacity>})
);
    
    React.useEffect(
      () => navigation.addListener('focus', () => setIsPlay(true)),
      []
    );
  
     React.useEffect(
       () => navigation.addListener('blur', () => setIsPlay(false)),
       []
     );
     return <View style={{height: '100%', width: '100%'}}>
    {music}
  <Image style={{zIndex: 1, height: "30%", width: '100%', alignSelf: "center"}} resizeMode="contain" source={require('../../assets/header.png')}/>
      <ButtonsMenu resize="cover" source={require("../../assets/alice.jpg")} style={styles.buttonMenu1} title="מבוא" navigate={() => 
        navigation.navigate('Intro', {play: () => setIsPlay(true), pause: () => setIsPlay(false)})}/>
      <ButtonsMenu resize="cover" source={require("../../assets/alice.jpg")} style={styles.buttonMenu2} title = "לימוד ספרות" navigate = {() => 
        navigation.navigate('LearningDigitsMenu', {play: () => setIsPlay(true), pause: () => setIsPlay(false)})}/>
      <ButtonsMenu resize="cover" source={require("../../assets/alice.jpg")} style={styles.buttonMenu3} title = "זיהוי ספרות" navigate = {() => navigation.navigate('IdentifyDigits', {arr: shuffleDeck(digits)})}/>
      <ButtonsMenu resize="cover" source={require("../../assets/alice.jpg")} style={styles.buttonMenu4} title = "חיבור תאומים" navigate= {() => navigation.navigate('AddingTwins')}/>
      <ButtonsMenu resize="cover" source={require("../../assets/alice.jpg")} style={styles.buttonMenu5} title = "חיבור ספרות שונות" navigate= {() => navigation.navigate('AddingNumbers')}/>
        <TouchableOpacity style={styles.infoStyle} onPress={() => navigation.navigate('AppInfo', {play: () => setIsPlay(true), pause: () => setIsPlay(false)})}>
         <MaterialCommunityIcons name="information" style={styles.icon}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mute} onPress={() => {setIsMute(!isMute)}}>
          <MaterialCommunityIcons style={styles.icon} name="music-circle" color={isMute? "grey" : "black"}/>
        </TouchableOpacity>
  <Balloons style={styles.bgimage}/>
  </View>
};

styles = StyleSheet.create({
  buttonMenu1: {
    aspectRatio: 1 / 1,
    height: '25%',
    borderRadius: 20,
    zIndex: 1,
    borderWidth: 1,
    left: isMobile? "20%" : "10%", 
    top: "30%",
    position: "absolute"
  },
  buttonMenu2: {
    aspectRatio: 1 / 1,
    height: '25%',
    borderRadius: 20,
    zIndex: 1,
    borderWidth: 1,
    left: isMobile? "45%" : "40%",
    top: "30%",
    position: "absolute",
  },
  buttonMenu3: {
    aspectRatio: 1 / 1,
    height: '25%',
    borderRadius: 20,
    zIndex: 1,
    borderWidth: 1,
    right: isMobile? "20%" : "10%", 
    top: "30%",
    position: "absolute",
  },
  buttonMenu4: {
    aspectRatio: 1 / 1,
    height: '25%',
    borderRadius: 20,
    zIndex: 1,
    borderWidth: 1,
    left: isMobile? "32%" : "25%",
    top: isMobile? "63%" : "65%",
    position: "absolute",
  },
  buttonMenu5: {
    aspectRatio: 1 / 1,
    height: '25%',
    borderRadius: 20,
    zIndex: 1,
    borderWidth: 1,
    right: isMobile? "32%" : "25%",
    top: isMobile? "63%" : "65%",
    position: "absolute",
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
    marginBottom: "5%",
  },
  infoIcon: {
    fontSize: normalize(25),
    borderColor: "black", 
    borderWidth: 2, 
    borderRadius: 45, 
    paddingHorizontal: 3,
  },
  infoStyle: {
    position: "absolute",
    bottom: "5%",
    left: "2%",
    zIndex: 1
  },
  icon: {
    fontSize: isMobile? 60 : 80,
  },
  bgimage: {
    position: "relative",
    flex: 1,
  },
  mute: {
    position: "absolute",
    bottom: isMobile? "20%" : "15%",
    left: "2%",
    zIndex: 1
  }
});