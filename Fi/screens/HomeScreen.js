import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ProgressCircle from 'react-native-progress-circle';

import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
  return (
    <View style={{flex:1, backgroundColor:'#eee'}}>
      <View style={{flex:1, backgroundColor:'#fff'}} />
      <View style={{flex:2, flexDirection:'row',
        alignItems:'center',
        justifyContent:'center', backgroundColor:'#fff'}}>
        <Image source={require('../fi_name.png')} style={{height: 30, marginBottom:5}} resizeMode="contain"/>
      </View>
      <View style={{flex:10, flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'}}>
      <ProgressCircle
            percent={67}
            radius={140}
            borderWidth={20}
            color="#1e5631"
            shadowColor="#ccc"
            bgColor="#fff"
        >
            <Text style={{ fontSize: 46 }}>{'30,423'}</Text>
            <Text style={{ fontSize: 18 }}>{'+208 this week'}</Text>
        </ProgressCircle>
      </View>
      <View style={{flex:8, flexDirection:'row'}}>
        <View style={{flex:1, marginLeft:20}}>
          <ProgressCircle
                percent={67}
                radius={60}
                borderWidth={10}
                color="#1e5631"
                shadowColor="#ccc"
                bgColor="#fff"
            >
                <Text style={{ fontSize: 10 }}>{'20'}</Text>
            </ProgressCircle>
        </View>
        <View style={{flex:1, marginRight:20}}>
          <ProgressCircle
                percent={67}
                radius={60}
                borderWidth={10}
                color="#1e5631"
                shadowColor="#ccc"
                bgColor="#fff"
            >
                <Text style={{ fontSize: 10 }}>{'30'}</Text>
            </ProgressCircle>
        </View>
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
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
