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
import ReactNativeElements from './ReactNativeElements'
import MyList from './MyList'

export default class TestComponent extends Component {
  onPressLearnMore() {
    alert("Clicked");
  }
  _onPressButton() {
   // alert("touchable opacity");
  }
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.imageStyle}
                    source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }}
                />
                <View style={{ width: 150, height: 50, marginTop: 50 }}>
                    <Button
                        onPress={this.onPressLearnMore}
                        title="Learn More"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </View>

                <TouchableOpacity onPress={this._onPressButton} style={styles.btnStyle}>
                    <Text style={styles.btnText}>Click Me </Text>
                </TouchableOpacity>
            </View>
        );
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection:'row',
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  view1: {
    height: 60,
    width: 60,
    backgroundColor: 'yellow'
  },
  view2: {
    height: 60,
    width: 60,
    backgroundColor: 'pink'
  },
  imageStyle: {
    marginTop: 40,
    width: 300,
    height: 300
  },
btnStyle:{
    backgroundColor: '#55bbff',
     alignSelf: 'stretch',
     marginHorizontal:50,
     alignItems:'center',
     justifyContent:'center',
     borderRadius:5,
     padding:10,

 },
    btnText:{
        fontSize:16,
        color:'white',
    }
});