import React, {Component} from 'react';
import { View, StyleSheet, } from 'react-native';
import Root from './src/Root';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from './src/pages/login/login';
import MainScreen from './src/main';
import DetailScreen from './src/details';

export default class App extends Component {

  render() {
    return (
      <Root />
      // <View style={styles.container}>
      //    <Root /> 
      // </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
  },
})

