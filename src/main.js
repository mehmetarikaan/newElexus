import React, {Component} from 'react';
import { View, StyleSheet, Image,TouchableOpacity} from 'react-native';
import { Header } from './components/headers';
import { Card } from './card';
import Icon from 'react-native-vector-icons/Ionicons';


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
      <Icon 
          name="ios-cart"
          size={30}
          color="white"
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
