import React, {Component} from 'react';
import { View, StyleSheet, Image,TouchableOpacity} from 'react-native';
import { Header } from './components/headers';
import { Card } from './card';



class Main extends Component {

  static navigationOptions ={
    title:'Elexus Hotel',
    headerStyle: {
      backgroundColor: '#444444' 
    },
    headerTintColor: 'white',
    headerRight: (
      <TouchableOpacity 
      style={{ paddingVertical: 10, paddingHorizontal: 10,}} 
      onPress={() => alert('Sepetiniz boş.')}
      >
      <Image 
      style={{width:30, height:30, marginVertical: 10,}}
      source={require('./order-icon.png')}
      />
      </TouchableOpacity>
    ),
  };

  render() {
    return (
      <View style={{ flex:1 , }}>
      {/* <Header headerText='Elexus Hotel'/> */}
      
      <Header headerText='Siparişimi görüntüle'/> 
      <Card />
      
      </View>
    );
  }
}


export default Main;
