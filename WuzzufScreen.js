import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    TouchableOpacity,
    TextInput,
    Linking
} from 'react-native';

import SocialButton from './SocialButton';

export default class WuzzufSCreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newText: ""
        }
    }

    _onPressButton = () => {
        alert(this.state.newText)
    }
    onPressbtn(url) {

        //  let url="https://www.google.com"
        Linking.openURL(url).catch(err => console.error('An error occurred', err));

    }
    render() {
        return (
            <View >
                <View style={{ alignItems: 'center' }}>
                    <Image
                        style={{ alignSelf: 'center' }}
                        source={{
                            uri: this.props.logo ? this.props.logo :
                                'https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAeBAAAAJGNjMGMxNjIzLTVjZTEtNDk3YS1hOTcxLTc3MTE2YzNhNzdkZA.png'
                        }} style={{ width: 200, height: 200 }} />
                </View>
                <TextInput
                    defaultValue={this.state.textinput}
                    editable={true}
                    maxLength={40}
                    onChangeText={(e) => this.setState({ newText: e })}
                />
                <TouchableOpacity onPress={this._onPressButton} style={styles.btnStyle}>
                    <Text style={styles.btnText}>Click Me </Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', }}>
                    <SocialButton logo="https://en.facebookbrand.com/wp-content/uploads/2016/05/FB-fLogo-Blue-broadcast-2.png" onPressbtn={() => this.onPressbtn("https://www.google.com")} />
                    <SocialButton logo="http://www.pngall.com/wp-content/uploads/2016/07/Twitter-Download-PNG.png" onPressbtn={() => this.onPressbtn("https://www.google.com")} />
                    <SocialButton logo="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" onPressbtn={() => this.onPressbtn("https://www.google.com")} />
                </View>

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
    btnStyle: {
        backgroundColor: '#55bbff',
        alignSelf: 'stretch',
        marginHorizontal: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        padding: 10,
        marginVertical: 10

    },
    btnText: {
        fontSize: 16,
        color: 'white',
    }
});