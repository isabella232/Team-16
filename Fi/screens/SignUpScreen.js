import * as WebBrowser from 'expo-web-browser';
import React, {Component} from 'react';
import axios from 'axios';
import ProgressCircle from 'react-native-progress-circle';

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

class SignUpScreen extends Component{
  state = {
    email:"",
    password:"",
  }

  render() {
    const {firstname, lastname, email, password} = this.state;

    return (
    <View style={{flex:1}}>
      <View style={{flex:3}} />
      <View style={{flex:4, flexDirection:'column', alignItems:'center'}}>
        <Text style={{ fontSize: 30, marginBottom: 10, color: '#444'}}>
          sign up
        </Text>
        <TextInput style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, margin:5, paddingLeft:10 }}
        value={this.firstname}
        placeholder="first name"
        onChange={(text) => {this.setState({firstname: text})}} />
        <TextInput style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, margin:5, paddingLeft:10 }}
        value={this.lastname}
        placeholder="last name"
        onChange={(text) => {this.setState({lastname: text})}} />
        <TextInput style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, margin:5, paddingLeft:10 }}
        value={this.email}
        placeholder="email"
        onChange={(text) => {this.setState({email: text})}} />
        <TextInput style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, margin:5, paddingLeft:10 }}
        value={this.password}
        placeholder="password"
        onChange={(text) => {this.setState({password: text})}}
        secureTextEntry={true}/>
        <View style={{marginTop:5}}>
        <Button title="submit" color="#1e5631"
          onPress={() => axios.get('https://paypal-hackathon.herokuapp.com/authentication/signup/', {firstname, lastname, email, password})
            .then(function (response) {
              // handle success
              console.log(response)
            })}/>
        </View>
        <Button title="X" color="#444"
          onPress={() => {this.props.navigation.navigate("Login")}}/>
      </View>
      <View style={{flex:2}} />
    </View>
  );
}
}

SignUpScreen.navigationOptions = {
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

export default SignUpScreen;
