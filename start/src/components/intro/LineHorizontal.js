import React,{useEffect, useState} from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'
import { IconButton } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import normalize from "react-native-normalize";

const LineHorizontal = ({style, count, setCounter, setRewardState, flag}) => {

  const [isPress, setIsPress] = useState(false);
  //const [image, setImage] = useState(images[0].source);

    useEffect(() => {
      if (count == 0)
      {
        setRewardState();
      }
    }, [isPress]);

    return <TouchableOpacity style={style/*{position: 'absolute', zIndex: 1, backgroundColor: 'black'}*/} onPress = {() => {
      setIsPress(true);
      setCounter();
    }} disabled={isPress}>
      <Ionicons name="md-remove" size={200} color={isPress&& flag ? 'green' : 'black'}/>
      {/* <Image style={style} source = {image}/> */}
  </TouchableOpacity>
}
export default LineHorizontal;