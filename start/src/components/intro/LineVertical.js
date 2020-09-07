import React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Animatable from 'react-native-animatable';

export default class LineVertical extends React.Component {
  handleViewRef = ref => this.view = ref;
  
  shake = () => this.view.shake(800).then(endState => console.log(endState.finished ? 'bounce finished' : 'bounce cancelled'));
  
  render() {
    return (
        <Animatable.View style={this.props.style} ref={this.handleViewRef}>
            <TouchableOpacity onPress = {this.shake}>
          <Ionicons name="md-remove" size={100} color={'black'} style={{transform: [{rotate: '90deg'}]}}/>
    </TouchableOpacity>
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