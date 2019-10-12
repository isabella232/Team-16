import React, {Component} from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
class AppNavigator extends Component {
  state = {  }
  render() { 
    console.log(this.props);
    
    return ( <Stack screenProps = {this.props}>

    </Stack> );
  }
}
 
export default AppNavigator;



Stack = createAppContainer(
  createSwitchNavigator({
    Login: LoginScreen,
    Signup: SignUpScreen,
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
  }, {
    initialRouteName: "Login"
  })
);
