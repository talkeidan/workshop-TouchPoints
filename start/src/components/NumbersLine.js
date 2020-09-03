import React from "react";
import {View,  Image, StyleSheet, TouchableOpacity, Dimensions} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import normalize from "react-native-normalize";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import * as Animatable from 'react-native-animatable';
import OptionDigit from "./OptionDigit";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const isMobile = windowWidth <= 812 && true;

export default class NumbersLine extends React.Component 
{
    render() {
        console.log(this.props.result);
        return (
          <View style={styles.line} >
              <OptionDigit source ={require("../../assets/number1.png")} value ="1" result ={this.props.result} setRewardState={() => this.props.setRewardState()}></OptionDigit>
              <OptionDigit source ={require("../../assets/number2.png")} value ="2" result ={this.props.result} setRewardState={() => this.props.setRewardState()}></OptionDigit>
              <OptionDigit source ={require("../../assets/number3.png")} result ={this.props.result}></OptionDigit>
              <OptionDigit source ={require("../../assets/number4.png")} result ={this.props.result}></OptionDigit>
              <OptionDigit source ={require("../../assets/number5.png")} result ={this.props.result}></OptionDigit>
              <OptionDigit source ={require("../../assets/number6.png")} result ={this.props.result}></OptionDigit>
              <OptionDigit source ={require("../../assets/number7.png")} result ={this.props.result}></OptionDigit>
              <OptionDigit source ={require("../../assets/number8.png")} result ={this.props.result}></OptionDigit>
              <OptionDigit source ={require("../../assets/number9.png")} result ={this.props.result}></OptionDigit>
         </View>
        );
      
    }}
    const styles = StyleSheet.create({
        line:{
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
// const NumbersLine = ({onPress}) => {
//     return <View style = {styles.line}>
//         <TouchableOpacity style={{position: "absolute", zIndex: 1, borderWidth: 2, height: "100%", width: "10%"}} onPress={onPress} >
//         <Image style={styles.number} resizeMode="contain" source={require("../../assets/number1.png")}/>
//         </TouchableOpacity>
//         <TouchableOpacity style={{position: "absolute", left: "10%", zIndex: 1, borderWidth: 2, height: "100%", width: "10%"}} onPress={onPress} >
//         <Image style={styles.number} resizeMode="contain" source={require("../../assets/number2.png")}/>
//         </TouchableOpacity>
//         <TouchableOpacity style={{position: "absolute", left: "20%", zIndex: 1, borderWidth: 2, height: "100%", width: "10%"}} onPress={onPress} >
//         <Image style={styles.number} resizeMode="contain" source={require("../../assets/number3.png")}/>
//         </TouchableOpacity>
//         <TouchableOpacity style={{position: "absolute", left: "30%", zIndex: 1, borderWidth: 2, height: "100%", width: "10%"}} onPress={onPress} >
//         <Image style={styles.number} resizeMode="contain" source={require("../../assets/number4.png")}/>
//         </TouchableOpacity>
//         <TouchableOpacity style={{position: "absolute", left: "40%", zIndex: 1, borderWidth: 2, height: "100%", width: "10%"}} onPress={onPress} >
//         <Image style={styles.number} resizeMode="contain" source={require("../../assets/number5.png")}/>
//         </TouchableOpacity>
//         <TouchableOpacity style={{position: "absolute", left: "50%", zIndex: 1, borderWidth: 2, height: "100%", width: "10%"}} onPress={onPress} >
//         <Image style={styles.number} resizeMode="contain" source={require("../../assets/number6.png")}/>
//         </TouchableOpacity>
//         <TouchableOpacity style={{position: "absolute", left: "60%", zIndex: 1, borderWidth: 2, height: "100%", width: "10%"}} onPress={onPress} >
//         <Image style={styles.number} resizeMode="contain" source={require("../../assets/number7.png")}/>
//         </TouchableOpacity>
//         <TouchableOpacity style={{position: "absolute", left: "70%", zIndex: 1, borderWidth: 2, height: "100%", width: "10%"}} onPress={onPress} >
//         <Image style={styles.number} resizeMode="contain" source={require("../../assets/number8.png")}/>
//         </TouchableOpacity>
//         <TouchableOpacity style={{position: "absolute", left: "80%", zIndex: 1, borderWidth: 2, height: "100%", width: "10%"}} onPress={onPress} >
//         <Image style={styles.number} resizeMode="contain" source={require("../../assets/number9.png")}/>
//         </TouchableOpacity>
//         </View>
// }
// const styles = StyleSheet.create({
//    line:{
//    // flex: 1,
//    backgroundColor:"yellow",
//     position: "absolute",
//     marginTop: "2%",
//     borderRadius: 20,
//    // borderColor:"black",borderWidth:5,
//     height: hp('20%'),
//     width: isMobile? wp('100%') : wp('90%'),
//     top: isMobile? wp('39%') : wp('90%'),
//     left: isMobile? wp('5%') : wp('90%'),
//    },
//     number: {
//         //left: isMobile? wp('-45%') : wp('90%'),
//         height: "100%",
//          width: "100%",
//          zIndex: 1
//     }
// });

// export default NumbersLine;