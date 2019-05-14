import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Form extends Component{
    render() {
        return(
            <View style={{ flex:1 , backgroundColor:'green', alignItems: 'center', justifyContent:'center' }} >
            <Text>Merhaba Dünya</Text>
            </View>
        );
    }
}

export default Form;