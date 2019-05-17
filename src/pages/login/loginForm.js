import React, { Component } from 'react'
import { Text, View, StyleSheet,  } from 'react-native'
import Input from '../../components/input';
import MyButton from '../../components/myButton';

export default class LoginForm extends Component {
  render() {
    return (
      <View>
        <Input  
        returnKeyType='next'
        placeholder='Oda numaranız' 
        autoCapitalize='none' /> 
        <Input  
        placeholder='Doğum yılınız' 
        // secureTextEntry={true} 
        />
        <MyButton 
        textColor={"#f1f1f1"}
        bgColor={'#0065e0'}
        text={"Giriş Yap"}
        /> 
      </View>
    )
  }
}

const styles = StyleSheet.create({
    signInText:{
        marginVertical: 10,
        fontSize: 14,
        color: '#333'
    },
})
