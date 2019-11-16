import { createStackNavigator, createAppContainer } from 'react-navigation';
import Logscreen from './src/screens/Logscreen';
import codeScreen from './src/screens/codeScreen';
import maps from './src/screens/maps'
import ProfileScreen from './src/screens/ProfileScreen'


const navigator = createStackNavigator(
  {
    Home: Logscreen,
    Code: codeScreen,
    Maps: maps,
    profile:ProfileScreen,

  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: ' Welcome To MONYC '
    }
  }
);
export default createAppContainer(navigator);
