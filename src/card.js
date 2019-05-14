import React, { Component } from 'react';
import { Text, TouchableOpacity, Image, StyleSheet, View, FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Loading } from './components/loading';

class Card extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      childData: [],
      child: null,
      parent: 42,
      isLoading: true,
    };
  }

  renderItem = ({ item }) => {
    
    return (
      
      <View>
         <TouchableOpacity onPress={()=>{
    //        const doSet = function() {
    //          this.setState({
    //         child: item.id,
    //         parent: item.parentId
    //       })
    //       setTimeout(doSet, 500)
    //     }
    //     const doSet = function() {
    //       this.clickedItem(item)
    //    setTimeout(doSet, 1000)
    //  }
          
           this.setState({
              child: item.id,
              parent: item.parentId
            })
            console.log(this.state.childData)
            this.clickedItem(item)
            console.log(this.props);
        }}>
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

  renderItemChild = ({ item }) => {
    console.log("renderItemChild", item)
    return (
      <View>
        <TouchableOpacity onPress={()=>{
         this.setState({
          child: item.id
        })
        this.clickedChild(item)
        }}>
        <View style={styles.imageCard}> 
          <Text style={styles.detailTextStyle}>
          {item.catName}
          </Text>  
        <Image 
          source= {{uri: item.imageUrl,}}
          style={{width: 500, height:250}}
          />
         </View> 
          <Text style={styles.fiyatTextStyle}>
          {item.Price}
          </Text>
          <Text style={styles.descriptionTextStyle}>
          {item.Description}
          </Text>        
        </TouchableOpacity> 
      </View>
    )
  }

clickedItem = (item) =>{
    Actions.Details();
  }


  componentDidMount = () => {
    fetch(`http://mapi.mertguler.com/api/v1/YemekAnaKategori/?parentID=${this.state.parent}&LangID=1`, {
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

  componentWillMount = () => {
    fetch(`http://mapi.mertguler.com/api/v1/YemekAnaKategori/?parentID=${this.state.child}&LangID=1`, {
      method: 'GET',
      headers: {
        ApplicationToken: 'F610E30E-8864-4834-8C2A-AEA5693A7769',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          childData: responseJson,
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
      this.state.child != null ? 
      (<View>
          <FlatList
            data={this.state.childData}
            keyExtractor={(item) => item}
            renderItem={this.renderItemChild}
            onPressItem={this.clickedItem}
          />
      </View>)
      :    
      (<View>
          <FlatList
            data={this.state.data}
            keyExtractor={(item) => item}
            renderItem={this.renderItem}
            onPressItem={this.clickedItem}
          />
      </View>)
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


const mapStateToProps = state => {
  return{
    child: state.child
  } 
}

export default connect(mapStateToProps) (Card);
