import React, {Component} from 'react';
import { View, StyleSheet, } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducers } from './src/reducers';
import Root from './src/Root';


export default class App extends Component {

  render() {
    return (
      <Provider store={createStore(reducers)}>
      <View style={styles.container}>
        <Root />
      </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
})

