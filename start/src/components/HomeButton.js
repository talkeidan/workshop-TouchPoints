import React from "react";
import { StyleSheet, TouchableOpacity} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import normalize from "react-native-normalize";

const HomeButton = ({onPress}) => {
    return <TouchableOpacity onPress={onPress} style={styles.home}>
         <MaterialCommunityIcons name="home-circle" size={normalize(40)} color="#993399" />
    </TouchableOpacity>
    
}
const styles = StyleSheet.create({
    home: {
        position: "absolute",
        left: '0%',
        top: '0%',
        zIndex: 1
    }
});

export default HomeButton;