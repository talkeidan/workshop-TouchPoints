import React, {useState} from "react";
import {View,  Image, StyleSheet, TouchableOpacity, Dimensions} from "react-native";
import * as Animatable from 'react-native-animatable';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const isMobile = windowWidth <= 812 && true;

export default class OptionDigit extends React.Component 
{
    handleViewRef = ref => this.view = ref;
    
    shake = () =>
     {
         if (this.props.result == this.props.value) {
             this.props.setRewardState();
         }
         else {
             this.view.shake(800);
         }
     }
      
    render() {
        return (
          <Animatable.View style={{zIndex: 1, borderWidth: 2, height: "100%", width: "11.1%"}} ref={this.handleViewRef}>
         <TouchableOpacity style={{height: "100%", width: "100%", zIndex: 1}} onPress={this.shake} >
         <Image style={{ height: "100%", width: "100%", zIndex: 1}} resizeMode="contain" source={this.props.source}/>
         </TouchableOpacity>
         </Animatable.View>
        );
    }}