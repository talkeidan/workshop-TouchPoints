import React,{useState} from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity} from "react-native";
import { IconButton } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import normalize from "react-native-normalize";

const Point = ({ unpressedStyle, pressedStyle, setRewardState, setCounter, count}) => {
    const [ isPress, setIsPress ] = useState(false);
   // const [thisCounter, setThisCounter] = useState(count);

return <TouchableOpacity style={isPress ? count == 0 ? {} : pressedStyle : unpressedStyle}  onPress={() =>
              { 
                setIsPress(true)
                setCounter()
                //setThisCounter(count - 1)

                if (count == 1)
                {
                    setRewardState()
                }
                }} disabled={isPress ? true : false}/>
            };

export default Point;