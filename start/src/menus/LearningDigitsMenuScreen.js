import React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity} from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import ButtonsMenu from "../components/ButtonsMenu"


const LearningDigitsMenuScreen = ({navigation}) => {
  return <Grid>
  <Row style= {styles.list1}>
    <ButtonsMenu title = "1" navigate = {() => navigation.navigate('LearningDigits')}/>
    <ButtonsMenu title = "2" navigate = {() => navigation.navigate('LearningDigits')}/>
    <ButtonsMenu title = "3" navigate = {() => navigation.navigate('LearningDigits')}/>
  </Row>
  <Row style={styles.list1}>
    <ButtonsMenu title = "4" navigate = {() => navigation.navigate('LearningDigits')}/>
    <ButtonsMenu title = "5" navigate = {() => navigation.navigate('LearningDigits')}/>
    <ButtonsMenu title = "6" navigate = {() => navigation.navigate('LearningDigits')}/>
  </Row>
  <Row style={styles.list1}>
    <ButtonsMenu title = "7" navigate = {() => navigation.navigate('LearningDigits')}/>
    <ButtonsMenu title = "8" navigate = {() => navigation.navigate('LearningDigits')}/>
    <ButtonsMenu title = "9" navigate = {() => navigation.navigate('LearningDigits')}/>
  </Row>
</Grid>
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
    //flex: 1
  },
});

export default LearningDigitsMenuScreen;