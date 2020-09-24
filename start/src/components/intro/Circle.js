import React,{useState, useEffect}  from "react";
import {Dimensions, Text, StyleSheet, View, Image, TouchableOpacity} from "react-native";
//import { Feather } from 'expo/vector-icons'
import { Ionicons,Feather } from "@expo/vector-icons";
import normalize from "react-native-normalize";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const isMobile = windowWidth <= 812 && true;

const Circle = ({style, count, setCounter, setRewardState, flag}) => {
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
          <Feather name="circle" size={isMobile? 100 : 200} color={isPress && flag ? 'green' : 'black'}/>
      </TouchableOpacity>
    }

export default Circle;