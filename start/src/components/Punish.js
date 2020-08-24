import React, {useState, useEffect} from "react";
import { Text, Dimensions, View, StyleSheet, TouchableOpacity} from "react-native";
import * as Animatable from 'react-native-animatable';

export default class Punish extends React.Component {
    handleViewRef = ref => this.view = ref;
    
    shake = () => this.view.shake(800).then(endState => console.log(endState.finished ? 'bounce finished' : 'bounce cancelled'));
    
    render() {
      return (
          <Animatable.View style={this.props.style} ref={this.handleViewRef}>
          <TouchableOpacity style={styles.button} onPress={this.shake}/>
        </Animatable.View>
      );
    }
  }

  const styles = StyleSheet.create({
      button: {
          height: '100%',
          width: '100%'
      }
  });