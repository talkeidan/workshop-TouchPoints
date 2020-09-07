import React from "react";
import {View,  Image, StyleSheet, TouchableOpacity, Dimensions} from "react-native";
import OptionDigit from "./OptionDigit";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const isMobile = windowWidth <= 812 && true;

export default class NumbersLine extends React.Component 
{
    render() {
        return (
          <View style={styles.line} >
              <OptionDigit source={require("../../assets/number1.png")} value="1" result={this.props.result} setRewardState={() => this.props.setRewardState()}/>
              <OptionDigit source={require("../../assets/number2.png")} value="2" result={this.props.result} setRewardState={() => this.props.setRewardState()}/>
              <OptionDigit source={require("../../assets/number3.png")} value="3" result={this.props.result} setRewardState={() => this.props.setRewardState()}/>
              <OptionDigit source={require("../../assets/number4.png")} value="4" result={this.props.result} setRewardState={() => this.props.setRewardState()}/>
              <OptionDigit source={require("../../assets/number5.png")} value="5" result={this.props.result} setRewardState={() => this.props.setRewardState()}/>
              <OptionDigit source={require("../../assets/number6.png")} value="6" result={this.props.result} setRewardState={() => this.props.setRewardState()}/>
              <OptionDigit source={require("../../assets/number7.png")} value="7" result={this.props.result} setRewardState={() => this.props.setRewardState()}/>
              <OptionDigit source={require("../../assets/number8.png")} value="8" result={this.props.result} setRewardState={() => this.props.setRewardState()}/>
              <OptionDigit source={require("../../assets/number9.png")} value="9" result={this.props.result} setRewardState={() => this.props.setRewardState()}/>
         </View>
        );
      
    }}
    const styles = StyleSheet.create({
        line: {
            backgroundColor:"yellow",
            position: "absolute",
            borderRadius: 20,
            height: "20%",
            justifyContent: "center",
            width: isMobile? "100%" : "100%",
            top: "102%",
            flexDirection: "row",
         },
          number: {
              height: "100%",
              width: "100%",
              zIndex: 1
          }
      });