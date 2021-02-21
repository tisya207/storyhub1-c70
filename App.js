import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation'
import writestoryscreen from './screens/writestoryscreen';
import readstoryscreen from './screens/readstoryscreen';

export default class App extends React.Component {
  render(){
  return (
<AppContainer/>
  );
}
}

const TabNavigator=createBottomTabNavigator({
readstoryscreen:{screen:readstoryscreen,
  navigationOptions:{
    tabBarIcon:<Image source={require('./assets/read.png')} style={{width:40, height:40}} />,
    tabBarLabel:'read story'
  }
},
writestoryscreen:{screen:writestoryscreen,
  navigationOptions:{
    tabBarIcon:<Image source={require('./assets/write.png')} style={{width:40, height:40}} />,
    tabBarLabel:'write story'
  }},


})
const AppContainer=createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
