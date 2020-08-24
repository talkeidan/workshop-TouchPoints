import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/menus/HomeScreen";
import IntroScreen from './src/menus/IntroScreen';
import LearningDigitsMenuScreen from './src/menus/LearningDigitsMenuScreen';
import IdentifyDigitsScreen from './src/menus/IdentifyDigitsScreen';
import AddingTwinsScreen from './src/menus/AddingTwinsScreen';
import AddingNumbersScreen from './src/menus/AddingNumbersScreen';
import AppInfoScreen from './src/menus/AppInfoScreen';
import CirclesLinesIdScreen from './src/screens/CirclesLinesIdScreen';
import LearningDigitsScreen from './src/screens/LearningDigitsScreen';
import CirclesLinesInShapesIdScreen from './src/screens/CirclesLinesInShapesIdScreen';
import MemoryAidScreen from './src/screens/MemoryAidScreen';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Animated: `useNativeDriver` was not specified.',
]);
// import BoxScreen from './src/screens/BoxScreen';




const navigator = createStackNavigator(
  {
    Home: HomeScreen, 
    Intro: IntroScreen,
    LearningDigitsMenu: LearningDigitsMenuScreen,
    IdentifyDigits: IdentifyDigitsScreen,
    AddingTwins: AddingTwinsScreen,
    AddingNumbers: AddingNumbersScreen,
    AppInfo: AppInfoScreen,
    CirclesLinesId: CirclesLinesIdScreen,
    CirclesLinesInShapesId: CirclesLinesInShapesIdScreen,
    LearningDigits: LearningDigitsScreen,
    MemoryAid: MemoryAidScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: "touch points"
    }
  }
);

export default createAppContainer(navigator);
