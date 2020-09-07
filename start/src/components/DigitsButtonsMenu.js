import React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity} from "react-native";

const DigitsButtonsMenu = ({title, navigation, digit}) => {
    return <TouchableOpacity onPress = {
        navigation.navigate('LearningDigits', {index: digit - 1})}>
     <Image style ={styles.image} source = {require("../../assets/alice.jpg")}/>
        <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
}
const styles = StyleSheet.create({
    image:{
        aspectRatio: 1 / 1,
        height: '45%',
        borderRadius: 20,
    },
    text: {
        justifyContent: "center",
        alignSelf: "center",
        fontSize: 20,
        fontWeight: "bold",
    }
});

export default DigitsButtonsMenu;