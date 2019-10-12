import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import {View, Text, Image} from "react-native";
import ProgressCircle from 'react-native-progress-circle';


export default function LeaderboardScreen() {
  return (
    <View style ={{flex:1, flexDirection: "column"}}>
        <View style = {{flex:2, marginLeft:40, flexDirection: "column"}}>
            <View style ={{flex:1, flexDirection:"row", alignItems: "center"}}>
              <View style = {{flex:1}}>
                <Text style = {{fontSize:30, }}>
                  Kris
                </Text>
              </View>
              <View style = {{flex:1}}>
              <ProgressCircle
                    style = {{marginLeft:20}}
                    percent={67}
                    radius={40}
                    borderWidth={10}
                    color="#1e5631"
                    shadowColor="#ccc"
                    bgColor="#fff"
                >
                <Text>
                  600
                </Text>
                
                </ProgressCircle>
              </View>
                <Image source = {require("../rank1.jpg")} style = {{width: 50, height: 50, marginRight: 10}} resizeMode = "contain"></Image>
            </View>

            <View style ={{flex:1, flexDirection:"row", alignItems: "center"}}>
              <View style = {{flex:1}}>
                <Text style = {{fontSize:30, }}>
                  Jacqueline
                </Text>
              </View>
              <View style = {{flex:1}}>
              <ProgressCircle
                    style = {{marginLeft:20}}
                    percent={67}
                    radius={40}
                    borderWidth={10}
                    color="#1e5631"
                    shadowColor="#ccc"
                    bgColor="#fff"
                >
                <Text>
                  400
                </Text>
                </ProgressCircle>
              </View>
                <Image source = {require("../rank2.jpg")} resizeMode="contain" style = {{width: 50, height: 50,  marginRight: 10}}></Image>
            </View>
           
 
            <View style ={{flex:1, flexDirection:"row", alignItems: "center"}}>
              <View style = {{flex:1}}>
                <Text style = {{fontSize:30,}}>
                  Julian
                </Text>
              </View>
              <View style = {{flex:1}}>
                  <ProgressCircle
                    style = {{marginLeft:20}}
                    percent={67}
                    radius={40}
                    borderWidth={10}
                    color="#1e5631"
                    shadowColor="#ccc"
                    bgColor="#fff"
                >
                <Text>
                  150
                </Text></ProgressCircle>
              </View>
                <Image source = {require("../rank3.jpg")} resizeMode="contain" style = {{width: 50, height: 50,  marginRight: 10}}></Image>
            </View>
        
            <View style ={{flex:1, flexDirection:"row", alignItems: "center"}}>
              <View style = {{flex:1}}>
                <Text style = {{fontSize:30,}}>
                  Ashley
                </Text>
              </View>
              <View style = {{flex:1}}>
              <ProgressCircle
                    style = {{marginLeft:20}}
                    percent={67}
                    radius={40}
                    borderWidth={10}
                    color="#1e5631"
                    shadowColor="#ccc"
                    bgColor="#fff"
                >
                <Text>
                  100
                </Text>
                </ProgressCircle>
              </View>
                <Image source = {require("../rank3.jpg")} resizeMode="contain" style = {{width: 50, height: 50,  marginRight: 10}}></Image>
            </View>
      
            <View style ={{flex:1, flexDirection:"row", alignItems: "center"}}>
              <View style = {{flex:1}}>
                <Text style = {{fontSize:30,}}>
                  Omer
                </Text>
              </View>
              
              <View style = {{flex:1}}>

              <ProgressCircle
                    style = {{marginLeft:20}}
                    percent={67}
                    radius={40}
                    borderWidth={10}
                    color="#1e5631"
                    shadowColor="#ccc"
                    bgColor="#fff"
                >
                <Text>
                  50
                </Text>
                
                </ProgressCircle>
              </View>
                <Image source = {require("../rank3.jpg")} resizeMode="contain" style = {{width: 50, height: 50,  marginRight: 10}}></Image>
              
              
            </View>
            
        </View>
        <View style = {{flex:1, flexDirection: "row"}}>

        </View>

    </View>
  );
}

LeaderboardScreen.navigationOptions = {
  title: 'Leaderboard',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
