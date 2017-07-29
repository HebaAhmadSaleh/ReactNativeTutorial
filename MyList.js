import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import { Button } from 'react-native-elements'

export default class MyList extends Component {
  data = [
    { key: 'Devin' },
    { key: 'Jackson' },
    { key: 'James' },
    { key: 'Joel' },
    { key: 'John' },
    { key: 'Jillian' },
    { key: 'Jimmy' },
    { key: 'Julie' },
    { key: 'Devin' },
    { key: 'Jackson' },
    { key: 'James' },
    { key: 'Joel' },
    { key: 'John' },
    { key: 'Jillian' },
    { key: 'Jimmy' },
    { key: 'Julie' }
  ];
  _keyExtractor = (item, index) => index;
  renderItem({ item }) {
    return (<View style={styles.itemStyle}>
      <Text style={styles.item}>{item.key}</Text>
    </View>)
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.data}
          keyExtractor={this._keyExtractor}
          renderItem={this.renderItem}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  itemStyle: {
    borderBottomWidth: 2,
    borderBottomColor: '#EAEAEA',
    backgroundColor: 'white',
    elevation: 50,
    margin: StyleSheet.hairLineWidth,
    alignItems: 'center'

  }
})