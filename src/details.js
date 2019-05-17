import React, { Component } from 'react';
import { Text, TouchableOpacity, Image, StyleSheet, View, FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Loading } from './components/loading';


class Details extends Component {
    constructor() {
        super();
        this.state = {
          data: [],
          isLoading: true,
          id:1,
        };
      }

      renderItem = ({ item }) => {
        return (
          <View>
            <TouchableOpacity onPress={this.clickedItem}>
            <View>  
            <Image 
              source= {{uri: item.imageUrl,}}
              style={{width: 500, height:250}}
              />
              </View> 
              <View> 
              <Text style={styles.textStyle}>
              {item.catName}
              </Text>
              </View>         
            </TouchableOpacity> 
          </View>
        )
      }
    
    clickedItem = () =>{
      Actions.Main();
      }

      componentDidMount = () => {
        fetch(`http://mapi.mertguler.com/api/v1/YemekAnaKategori/?parentID=${this.state.id}&LangID=1`, {
          method: 'GET',
          headers: {
            ApplicationToken: 'F610E30E-8864-4834-8C2A-AEA5693A7769',
          },
        })
          .then((response) => response.json())
          .then((responseJson) => {
            console.log(responseJson);
            this.setState({
              data: responseJson,
              isLoading: false,
            })
          })
          .catch((error) => {
            console.error(error);
          });
      }
    
  render() {
    return (
      
        this.state.isLoading
        ?
        <Loading/>
        :
        <View>
            <FlatList
              data={this.state.data}
              keyExtractor={(item) => item}
              renderItem={this.renderItem}
              onPressItem={this.clickedItem}
            />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    textStyle: {
    justifyContent: 'center', 
    alignItems:'center', 
    fontSize: 18,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 1,
    textAlign: 'center'
  },
})

export default Details;
