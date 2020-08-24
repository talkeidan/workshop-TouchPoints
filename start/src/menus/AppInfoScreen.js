import React from "react";
import { Text, StyleSheet, View, ImageBackground, Button} from "react-native";
import normalize from "react-native-normalize";


const AppInfoScreen = () => {
  return <ImageBackground source={require('../../assets/stars.png')} style={{height: '100%', width: '100%'}}>
    <ImageBackground source={require('../../assets/note.png') } resizeMode='contain' style={styles.bgimage}>
    <Text style={styles.textContainer}>
    האפליקציה פותחה על מנת ללמד ילדים, ובפרט ילדים בעלי לקויות למידה חשבון בסיסי: למנות ולחבר ספרות עד 10.
    קהל היעד הוא ילדים בגילאי גן חובה ועד כיתה א', השיטה פותחה על ידי רונית קידן, מורה להוראה מתקנת, שביקשה ליצור חוויה אינטרקטיבית עבור הילדים.
    על השיטה: על כל ספרה ישנה כמות מתאימה של נקודות (לדוגא לספרה 1 ישנה נקודה אחת), כאשר המטרה היא שהילדים יזכרו את מיקומי הנקודות ויצליחו באמצעות מנייה לשיים את הספרות ובכך לזכור אותן.
    וכמו כן, להשתמש בשיטה על מנת להצליח לחבר ספרות עד עשר.
    </Text>
  </ImageBackground>
    </ImageBackground>
  
};

const styles = StyleSheet.create({
  text: {
    fontSize: normalize(10),
    writingDirection: 'rtl',
    width: '20%'
  },
  textContainer: {
    width: "50%",
    height: '70%',
    //borderWidth: normalize(5),
    textAlign: "justify",
    textAlignVertical: "center",
    fontSize: normalize(9),
    margin: normalize(25),
    marginTop: normalize(20),
    //letterSpacing: 1.25,
    lineHeight: 39,
    padding: "2%",
    writingDirection: 'rtl',
    transform: [{rotate: '2deg'}]
  },
  bgimage: {
    position: "relative",
    flex: 1,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default AppInfoScreen;