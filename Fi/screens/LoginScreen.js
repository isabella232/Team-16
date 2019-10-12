import * as WebBrowser from 'expo-web-browser';
import React, {Component} from 'react';
import axios from 'axios';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  TextInput,
} from 'react-native';

import { MonoText } from '../components/StyledText';

class LoginScreen extends Component{
  state = {
    email:"",
    password:"",
  }

  render() {
    const {email, password} = this.state;

    return (
    <View style={{flex:1}}>
      <View style={{flex:3}} />
      <View style={{flex:4, flexDirection:'column', alignItems:'center'}}>
        <Image source={require('../fli_logo.png')} style={{height: 80, marginBottom:5}} resizeMode="contain"/>
        <Text style={{ fontSize: 27, marginBottom: 7 , color: '#444'}}>
          login to Fi!
        </Text>
        <TextInput style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, margin:10, paddingLeft:10 }}
        value={this.email}
        placeholder="email"
        onChange={(text) => {this.setState({email: text})}} />
        <TextInput style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingLeft:10 }}
        value={this.password}
        placeholder="password"
        onChange={(text) => {this.setState({password: text})}}
        secureTextEntry={true}/>
        <Button title="submit"
          color="#1e5631"
          onPress={() => axios.get('https://paypal-hackathon.herokuapp.com/authentication/login', {email, password})
            .then(function (id) {

            })}/>
        <Button title="sign up"
          color="#1e5631"
          onPress={() => {this.props.navigation.navigate("Signup")}}/>
      </View>
      <View style={{flex:2}} />
    </View>
  );
}
}

LoginScreen.navigationOptions = {
  header: null,
};

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

export default LoginScreen;
