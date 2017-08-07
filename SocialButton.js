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

export default class SocialButton extends Component {


    render(){
        return(<TouchableOpacity style={{borderRadius:5}}
                onPress={()=>this.props.onPressbtn()}>
            <Image resizeMode="cover" source={{uri:this.props.logo ? this.props.logo : 'https://facebook.github.io/react/img/logo_og.png'}} style={{width:50,height:50}} />
             </TouchableOpacity>)

}

}