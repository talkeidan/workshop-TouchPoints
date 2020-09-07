import React,{useEffect, useState} from "react";
import { Dimensions, StyleSheet, View, Image, TouchableOpacity} from "react-native";
import { Ionicons } from "@expo/vector-icons";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const isMobile = windowWidth <= 812 && true;

const LineHorizontal = ({style, count, setCounter, setRewardState, flag}) => {

  const [isPress, setIsPress] = useState(false);

    useEffect(() => {
      if (count == 0)
      {
        setRewardState();
      }
    }, [isPress]);

    return <TouchableOpacity style={style} onPress = {() => {
      setIsPress(true);
      setCounter();
    }} disabled={isPress}>
      <Ionicons name="md-remove" size={200} color={isPress&& flag ? 'green' : 'black'}/>
  </TouchableOpacity>
}
export default LineHorizontal;