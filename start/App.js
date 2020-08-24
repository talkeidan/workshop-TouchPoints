import { createAppContainer } from 'react-navigation';
import * as React from 'react';
import { I18nManager} from 'react-native';
//import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/menus/HomeScreen";
import IntroScreen from './src/menus/IntroScreen';
import LearningDigitsMenuScreen from './src/menus/LearningDigitsMenuScreen';
import IdentifyDigitsScreen from './src/menus/IdentifyDigitsScreen';
import AddingTwinsScreen from './src/menus/AddingTwinsScreen';
import AddingNumbersScreen from './src/menus/AddingNumbersScreen';
import AppInfoScreen from './src/menus/AppInfoScreen';
import CirclesLinesIdScreen from './src/screens/CirclesLinesIdScreen';
import LearningDigitsScreen from './src/screens/LearningDigitsScreen';
import { YellowBox, ImageBackground } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
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
       <Stack.Screen name="IdentifyDigits" component={IdentifyDigitsScreen} />
       <Stack.Screen name="AddingTwins" component={AddingTwinsScreen} />
       <Stack.Screen name="AddingNumbers" component={AddingNumbersScreen} />
       <Stack.Screen name="AppInfo" component={AppInfoScreen} />
       <Stack.Screen name="CirclesLinesId" component={CirclesLinesIdScreen} />
       <Stack.Screen name="LearningDigits" component={LearningDigitsScreen} /*options={{headerBackTitle: 'תפריט', headerTitle: 'לימוד ספרות',  headerBackground: () => <View style={{height: '100%', width: '100%', backgroundColor: '#a69ab1'}}/>}}*/ />
     </Stack.Navigator>
   );
 }
 
function App() {
   return (
     <NavigationContainer>
       <MyStack />
     </NavigationContainer>
   );
 }

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
//     LearningDigits: LearningDigitsScreen
//   },
//   {
//     initialRouteName: 'Home',
//     defaultNavigationOptions: {
//       title: "Touch Points",
//       headerStyle: {backgroundColor: "#a69ab1", borderBottomWidth: 8}
//   }})
export default App;
// export default createAppContainer(navigator);
