import React,{useState, useEffect}  from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity} from "react-native";
import { Ionicons,Feather } from "@expo/vector-icons";

const images = [
  {source: require("../../../assets/circle.png")},
  {source: require("../../../assets/circle.png")}

]
const Circle = ({style, count, setCounter, setRewardState, flag}) => {
    const [isPress, setIsPress] = useState(false);
    const [image, setImage] = useState(images[0].source);

    useEffect(() => {
      
      if (isPress)
      {
        setImage(images[1].source);
      }
      if (count == 0)
      {
        setRewardState();
      }
    }, [isPress]);

        return <TouchableOpacity style={style} onPress = {() => {
          setIsPress(true);
          setCounter();
        }} disabled={isPress}>
          <Feather name="circle" size={100} color={isPress && flag ? 'green' : 'black'}/>
      </TouchableOpacity>
    }

export default Circle;