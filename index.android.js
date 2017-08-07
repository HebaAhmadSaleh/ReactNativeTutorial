/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity
} from 'react-native';
import ReactNativeElements from './ReactNativeElements';
import MyList from './MyList';
import TestComponent from './TestComponent';
import ListItem from './ListItem';
import WuzzufScreen from './WuzzufScreen';

import { StackNavigator } from 'react-navigation';


export default class mynewApp extends Component {

  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    return (
      <View style={styles.container}>
         <WuzzufScreen /> 
        {/* <TestComponent/> */}
         {/* <MyList/>  */}
        {/* <ReactNativeElements/> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

const SimpleApp = StackNavigator({
  Home: { screen: mynewApp },
  MyList: { screen: MyList },
  ListItem: { screen: ListItem }
});
AppRegistry.registerComponent('mynewApp', () => SimpleApp);

//AppRegistry.registerComponent('mynewApp', () => mynewApp);