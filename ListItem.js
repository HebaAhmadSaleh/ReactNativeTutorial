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


export default class TestComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Hello</Text>
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
});