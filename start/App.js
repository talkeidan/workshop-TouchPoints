import { createAppContainer } from 'react-navigation';
import * as React from 'react';
import { I18nManager} from 'react-native';
//import { createStackNavigator } from 'react-navigation-stack';
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
//import CirclesLinesIdScreen from './src/screens/CirclesLinesIdScreen';//
import CirclesLinesInShapesIdScreen from './src/screens/CirclesLinesInShapesIdScreen';//
import MemoryAidScreen from './src/screens/MemoryAidScreen';
import { color } from 'react-native-reanimated';
import { View } from 'react-native-animatable';

//I18nManager.allowRTL(false);

YellowBox.ignoreWarnings([
  'Animated: `useNativeDriver` was not specified.',
]);


const Stack = createStackNavigator()
 function MyStack() {
   return (
     <Stack.Navigator initialRouteName="Home" title="Touch Points">
       <Stack.Screen name="Home" component={HomeScreen}/* options={{title: 'דף הבית'}}*//>
       <Stack.Screen name="Intro" component={IntroScreen} />
       <Stack.Screen name="LearningDigitsMenu" component={LearningDigitsMenuScreen} />
       <Stack.Screen name="IdentifyDigits" component={DigitsIdScreen} />
       <Stack.Screen name="AddingTwins" component={AddingTwinsScreen} />
       <Stack.Screen name="AddingNumbers" component={AddingNumbersScreen} />
       <Stack.Screen name="AppInfo" component={AppInfoScreen} />
       <Stack.Screen name="CirclesLinesId" component={CirclesLinesIdScreen} />
       <Stack.Screen name="LearningDigits" component={LearningDigitsScreen} /*options={{headerBackTitle: 'תפריט', headerTitle: 'לימוד ספרות',  headerBackground: () => <View style={{height: '100%', width: '100%', backgroundColor: '#a69ab1'}}/>}}*/ />
       <Stack.Screen name="CirclesLinesInShapesId" component={CirclesLinesInShapesIdScreen} />
       <Stack.Screen name="MemoryAid" component={MemoryAidScreen} />
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

// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import HomeScreen from "./src/menus/HomeScreen";
// import IntroScreen from './src/menus/IntroScreen';
// import LearningDigitsMenuScreen from './src/menus/LearningDigitsMenuScreen';
// import IdentifyDigitsScreen from './src/menus/IdentifyDigitsScreen';
// import AddingTwinsScreen from './src/menus/AddingTwinsScreen';
// import AddingNumbersScreen from './src/menus/AddingNumbersScreen';
// import AppInfoScreen from './src/menus/AppInfoScreen';
// import CirclesLinesIdScreen from './src/screens/CirclesLinesIdScreen';//
// import LearningDigitsScreen from './src/screens/LearningDigitsScreen';
// import CirclesLinesInShapesIdScreen from './src/screens/CirclesLinesInShapesIdScreen';//
// import MemoryAidScreen from './src/screens/MemoryAidScreen';//
// import { YellowBox } from 'react-native';
// import * as React from 'react';
// import { I18nManager} from 'react-native';

// YellowBox.ignoreWarnings([
//   'Animated: `useNativeDriver` was not specified.',
// ]);
// // import BoxScreen from './src/screens/BoxScreen';




// const navigator = createStackNavigator(
//   {
//     Home: HomeScreen, 
//     Intro: IntroScreen,
//     LearningDigitsMenu: LearningDigitsMenuScreen,
//     IdentifyDigits: IdentifyDigitsScreen,
//     AddingTwins: AddingTwinsScreen,
//     AddingNumbers: AddingNumbersScreen,
//     AppInfo: AppInfoScreen,
//     CirclesLinesId: CirclesLinesIdScreen,
//     CirclesLinesInShapesId: CirclesLinesInShapesIdScreen,
//     LearningDigits: LearningDigitsScreen,
//     MemoryAid: MemoryAidScreen
//   },
//   {
//     initialRouteName: 'Home',
//     defaultNavigationOptions: {
//       title: "touch points"
//     }
//   }
// );

//export default createAppContainer(navigator);
