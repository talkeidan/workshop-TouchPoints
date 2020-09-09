import * as React from 'react';
import { I18nManager, StyleSheet, TouchableOpacity} from 'react-native';
import HomeScreen from "./src/menus/HomeScreen";
import IntroScreen from './src/menus/IntroScreen';
import LearningDigitsMenuScreen from './src/menus/LearningDigitsMenuScreen';
import DigitsIdScreen from './src/screens/DigitsIdScreen';
import AddingTwinsScreen from './src/menus/AddingTwinsScreen';
import AddingNumbersScreen from './src/menus/AddingNumbersScreen';
import AppInfoScreen from './src/menus/AppInfoScreen';
import CirclesLinesIdScreen from './src/screens/CirclesLinesIdScreen';
import LearningDigitsScreen from './src/screens/LearningDigitsScreen';
import { YellowBox, ImageBackground } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import CirclesLinesInShapesIdScreen from './src/screens/CirclesLinesInShapesIdScreen';//
import MemoryAidScreen from './src/screens/MemoryAidScreen';
import AddingDiffDigitsScreen from './src/screens/AddingDiffDigitsScreen';
import BigSmallDigitScreen from './src/screens/BigSmallDigitScreen';

I18nManager.allowRTL(false);

YellowBox.ignoreWarnings([
  'Animated: `useNativeDriver` was not specified.', 'Non-serializable values were found in the navigation state.', 'Failed prop type: Invalid prop `fontSize` of type `string` supplied to `Text`, expected `number`.'
]);

const Stack = createStackNavigator()
 function MyStack() {
   return (
     <Stack.Navigator initialRouteName="Home" headerMode="none" screenOptions= {{title: 'TouchPoints', headerStyle:
     {backgroundColor: 'pink', height: 60}, headerTintColor: '#187cc2', headerTitleAlign: "center",
    headerTitleStyle:{borderColor: 'black', fontFamily: 'Arial Rounded MT Bold', fontWeight: 'bold' },}}>
       <Stack.Screen name="Home" component={HomeScreen} options={{title: 'TouchPoints', headerTitleStyle: {fontSize: 35, fontFamily: 'Arial Rounded MT Bold'}}}/>
       <Stack.Screen name="Intro" component={IntroScreen} options={{title: 'מבוא'}}/>
       <Stack.Screen name="LearningDigitsMenu" component={LearningDigitsMenuScreen} options={{title: 'תפריט לימוד ספרות'}} />
       <Stack.Screen name="IdentifyDigits" component={DigitsIdScreen} options={{title: 'זיהוי ספרות'}}/>
       <Stack.Screen name="AddingTwins" component={AddingTwinsScreen} options={{title: 'חיבור תאומים'}}/>
       <Stack.Screen name="AddingNumbers" component={AddingNumbersScreen} options={{title: 'חיבור מספרים'}}/>
       <Stack.Screen name="AppInfo" component={AppInfoScreen} options={{title: 'מידע'}}/>
       <Stack.Screen name="CirclesLinesId" component={CirclesLinesIdScreen} options={{title: 'זיהוי קווים ועיגולים'}}/>
       <Stack.Screen name="LearningDigits" component={LearningDigitsScreen} options={{title: 'לימוד ספרות'}} />
       <Stack.Screen name="CirclesLinesInShapesId" component={CirclesLinesInShapesIdScreen} options={{title: 'זיהוי עיגולים וקווים מתוך צורות'}}/>
       <Stack.Screen name="MemoryAid" component={MemoryAidScreen} options={{title: 'תומכי זיכרון'}} />
       <Stack.Screen name="BigSmallDigit" component={BigSmallDigitScreen} options={{title: 'גדול קטן'}} />
       <Stack.Screen name="AddingDiffDigits" component={AddingDiffDigitsScreen} options={{title: 'חיבור ספרות שונות'}} />
     </Stack.Navigator>
   );
 }
 
 export default function App() {
   return (
     <NavigationContainer>
       <MyStack />
     </NavigationContainer>
   );
 }

//  export default function App () {
//   // state = {
//   //   isReady: false,
//   // };
//   // componentDidMount() {
//   //   this.changeScreenOrientation;
//   // }
  
//     // if (!this.state.isReady) {
//     //   return (
//     //     <AppLoading
//     //       startAsync={this._cacheResourcesAsync}
//     //       onFinish={() => this.setState({ isReady: true })}
//     //       onError={console.warn}
//     //     />
//     //   ); }

//       return (
//         <NavigationContainer>
//           <MyStack />
//         </NavigationContainer>
//       );
      
    
//   }

//   async changeScreenOrientation() {
//     await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
//   }

//   async _cacheResourcesAsync() {
//     const images = [require('./assets/playground.jpg'),
//      require('./assets/kid9.png'),
//      require('./assets/kid4.png'),
//      require('./assets/home-music.mp3'),
//      require('./assets/kid8.png'),
//      require('./assets/kid7.png'), 
//      require('./assets/kid6.png'), 
//      require('./assets/kid5.png'), 
//      require('./assets/kid1.png'), 
//      require('./assets/alice.jpg'), 
//      require('./assets/kid2.png'), 
//      require('./assets/kid3.png'), 
//      require('./assets/number1.png'),
//      require('./assets/number2.png'),
//      require('./assets/number3.png'),
//      require('./assets/number4.png'),
//      require('./assets/number5.png'),
//      require('./assets/number6.png')];

//     const cacheImages = images.map(image => {
//       return Asset.fromModule(image).downloadAsync();
//     }); 
//     return Promise.all(cacheImages);
//   }
// }