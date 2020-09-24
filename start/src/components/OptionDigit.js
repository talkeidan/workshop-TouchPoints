import React, {useState} from "react";
import {View,  Image, StyleSheet, Dimensions} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";
import * as Animatable from 'react-native-animatable';
import { Video, Audio } from 'expo-av';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const isMobile = windowWidth <= 812 && true;
// const rewardSounds = [require("../../assets/sounds/yofi.mp4"),
// require("../../assets/sounds/kol-hakavod.mp4"),
// require("../../assets/sounds/yafeh-meod.mp4"),
// require("../../assets/sounds/metzuyan.mp4")]

export default class OptionDigit extends React.Component 
{
    handleViewRef = ref => this.view = ref;
    
    shake = () => {
         if (this.props.result == this.props.value) {
             this.props.setRewardState();
             
            //  <Video
            //     source={Math.floor(Math.random() * 4)}
            //     shouldPlay={true}
            //     isLooping={false}
            //     volume={0.1}
            //     useNativeControls ={false}/>
         }
         else {
             this.view.shake(800);
         }
     }
      
    render() {
        return (
          <Animatable.View style={styles.container} ref={this.handleViewRef}>
         <TouchableOpacity style={styles.button} onPress={this.shake} >
         <Image style={this.props.style} resizeMode="contain" source={this.props.source}/>
         </TouchableOpacity>
         </Animatable.View>
        );
    }}

    const styles = StyleSheet.create({
        container: {
            zIndex: 1, 
            borderWidth: 1,
            borderColor: "#537dc5",
            height: "100%", 
            width: "11.1%",
        },
        button: {
            height: "100%", 
            width: "100%", 
            zIndex: 1
        },
        image: {
            height: "100%", 
            width: "100%", 
            zIndex: 1
        }
    });