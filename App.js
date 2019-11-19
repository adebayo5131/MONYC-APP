import { createStackNavigator, createAppContainer, } from 'react-navigation';


import Logscreen from './src/screens/Logscreen';
import codeScreen from './src/screens/codeScreen';
import maps from './src/screens/maps'
import ProfileScreen from './src/screens/ProfileScreen'
import Loading from './src/screens/Loading'
import SignUp from './src/screens/SignUp'
import Main from './src/screens/Main'


const navigator = createStackNavigator(
  {
    load: Loading,
    login: Logscreen,
    Code: codeScreen,
    Maps: maps,
    profile: ProfileScreen,
    signup: SignUp,
    main: Main

  },
  {
    initialRouteName: 'signup',
    defaultNavigationOptions: {
      title: ' Welcome To MONYC '
    }
  }
);
export default createAppContainer(navigator);
