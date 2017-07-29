import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import { Button, CheckBox } from 'react-native-elements'

export default class ReactNativeElements extends Component {
   constructor(props) {
    super(props);
        this.state = {
            checked:false
        }
    }

    render() {
        return (
            <View style={styles.container}>

                <Button
                    large
                    iconRight
                    icon={{ name: 'code' }}
                    title='LARGE WITH RIGHT ICON'
                    backgroundColor="#7af8"
                    color="black" />


                <CheckBox
                    center
                    title='Click Here to Remove This Item'
                    iconRight
                    iconType='material'
                    checkedIcon='clear'
                    uncheckedIcon='add'
                    checkedColor='red'
                    checked={this.state.checked}
                />

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        //flexDirection:'row',
        //justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
    },
});