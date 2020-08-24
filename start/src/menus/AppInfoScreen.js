import React from "react";
import { Text, StyleSheet, View, Image, Button} from "react-native";
import normalize from "react-native-normalize";


const AppInfoScreen = () => {
  return <Text style={styles.textContainer}>
    האפליקציה פותחה על מנת ללמד ילדים, ובפרט ילדים בעלי לקויות למידה חשבון בסיסי: למנות ולחבר ספרות עד 10.
    קהל היעד הוא ילדים בגילאי גן חובה ועד כיתה א', השיטה פותחה על ידי רונית קידן, מורה להוראה מתקנת, שביקשה ליצור חוויה אינטרקטיבית עבור הילדים.
    על השיטה: על כל ספרה ישנה כמות מתאימה של נקודות (לדוגא לספרה 1 ישנה נקודה אחת), כאשר המטרה היא שהילדים יזכרו את מיקומי הנקודות ויצליחו באמצעות מנייה לשיים את הספרות ובכך לזכור אותן.
    וכמו כן, להשתמש בשיטה על מנת להצליח לחבר ספרות עד עשר.
      {/* /*<Text style={styles.text}>האפליקציה פותחה על מנת ללמד ילדים, ובפרט ילדים בעלי לקויות למידה חשבון בסיסי: למנות ולחבר ספרות עד 10.</Text>
      <Text style={styles.text}>קהל היעד הוא ילדים בגילאי גן חובה ועד כיתה א', השיטה פותחה על ידי רונית קידן, מורה להוראה מתקנת, שביקשה ליצור חוויה אינטרקטיבית עבור הילדים.</Text>
      <Text style={styles.text}>על השיטה: על כל ספרה ישנה כמות מתאימה של נקודות (לדוגא לספרה 1 ישנה נקודה אחת), כאשר המטרה היא שהילדים יזכרו את מיקומי הנקודות ויצליחו באמצעות מנייה לשיים את הספרות ובכך לזכור אותן.</Text>
      <Text style={styles.text}> וכמו כן, להשתמש בשיטה על מנת להצליח לחבר ספרות עד עשר.</Text> */}
    </Text>
};

const styles = StyleSheet.create({
  text: {
    fontSize: normalize(10),
    writingDirection: 'rtl'
  },
  textContainer: {
    height: "70%",
    borderWidth: normalize(5),
    textAlign: "justify",
    textAlignVertical: "center",
    fontSize: normalize(9),
    margin: normalize(25),
    marginTop: normalize(20),
    padding: "2%",
    borderRadius: normalize(20),
    writingDirection: 'rtl',
  }
});

export default AppInfoScreen;