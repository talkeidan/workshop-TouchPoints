import React from "react";
import { ImageBackground, StyleSheet, View, Image, TouchableOpacity} from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import ButtonsMenu from "../components/ButtonsMenu"
import BackButton from "../components/BackButton"
import DigitsButtonsMenu from "../components/DigitsButtonsMenu"
import One from "../components/One";
import Balloons from "../animations/Balloons";


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
      <Grid style={{zIndex: 1}}>
    <Row style= {styles.list1}>
<ButtonsMenu title="1" navigate={() => navigation.navigate('LearningDigits', {init: 0})}/>
      <ButtonsMenu title="2" navigate={() => navigation.navigate('LearningDigits', {init: 1})}/>
      <ButtonsMenu title="3" navigate={() => navigation.navigate('LearningDigits', {init: 2})}/>
    </Row>
    <Row style={styles.list1}>
      <ButtonsMenu title="4" navigate={() => navigation.navigate('LearningDigits', {init: 3})}/>
      <ButtonsMenu title="5" navigate={() => navigation.navigate('LearningDigits', {init: 4})}/>
      <ButtonsMenu title="6" navigate={() => navigation.navigate('LearningDigits', {init: 5})}/>
    </Row>
    <Row style={styles.list1}>
      <ButtonsMenu title="7" navigate={() => navigation.navigate('LearningDigits', {init: 6})}/>
      <ButtonsMenu title="8" navigate={() => navigation.navigate('LearningDigits', {init: 7})}/>
      <ButtonsMenu title="9" navigate={() => navigation.navigate('LearningDigits', {init: 8})}/>
    </Row>
    <BackButton onPress={() => navigation.goBack()}/>
    </Grid>
  <Balloons style={styles.bgimage}/>
  </View>

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
  bgimage: {
    position: "relative",
    flex: 1,
  }
});

export default LearningDigitsMenuScreen;