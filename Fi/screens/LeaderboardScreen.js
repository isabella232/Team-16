import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import {View, Text} from "react-native";
import ProgressCircle from 'react-native-progress-circle';


export default function LeaderboardScreen() {
  return (
    <View style ={{flex:1, flexDirection: "column"}}>
        <View style = {{flex:2, marginLeft:40, flexDirection: "column"}}>
            <View style ={{flex:1, flexDirection:"row", alignItems: "center"}}>
              <View style = {{flex:1}}>
                <Text style = {{fontSize:30, color: "#F5F5F5"}}>
                  Kris
                </Text>
              </View>
              <View style = {{flex:1}}>
              <ProgressCircle
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
            </View>
            <View style ={{flex:1, flexDirection:"row"}}>
            <View style ={{flex:1, flexDirection:"row", alignItems: "center"}}>
              <View style = {{flex:1}}>
                <Text style = {{fontSize:30, color: "#F5F5F5"}}>
                  Jacqueline
                </Text>
              </View>
              <View style = {{flex:1}}>
              <ProgressCircle
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
            </View>
            </View>
            <View style ={{flex:1, flexDirection:"row"}}>
            <View style ={{flex:1, flexDirection:"row", alignItems: "center"}}>
              <View style = {{flex:1}}>
                <Text style = {{fontSize:30, color: "#F5F5F5"}}>
                  Julian
                </Text>
              </View>
              <View style = {{flex:1}}>
                  <ProgressCircle
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
            </View>
            </View>
            <View style ={{flex:1, flexDirection:"row"}}>
            <View style ={{flex:1, flexDirection:"row", alignItems: "center"}}>
              <View style = {{flex:1}}>
                <Text style = {{fontSize:30, color: "#F5F5F5"}}>
                  Ashley
                </Text>
              </View>
              <View style = {{flex:1}}>
              <ProgressCircle
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
            </View>
            </View>
            <View style ={{flex:1, flexDirection:"row"}}>
            <View style ={{flex:1, flexDirection:"row", alignItems: "center"}}>
              <View style = {{flex:1}}>
                <Text style = {{fontSize:30, color: "#F5F5F5"}}>
                  Omer
                </Text>
              </View>
              <View style = {{flex:1}}>
              <ProgressCircle
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
            </View>
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
