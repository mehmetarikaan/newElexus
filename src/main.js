import React, {Component} from 'react';
import { View, StyleSheet,} from 'react-native';
import { Header } from './components/headers';
import { Card } from './card';


class Main extends Component {

  render() {
    return (
      <View style={{ flex:1 , }}>
      <Header headerText='Elexus Hotel'/>
      <Header headerText='Siparişimi görüntüle'/> 
      <Card />
      </View>
    );
  }
}


export default Main;
