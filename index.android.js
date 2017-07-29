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

export default class mynewApp extends Component {


  render() {
    return (
      <View style={styles.container}>
           {/* <TestComponent/> */}
         {/* <MyList/> */}
         <ReactNativeElements/>
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

AppRegistry.registerComponent('mynewApp', () => mynewApp);
