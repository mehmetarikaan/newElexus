import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Main from './main';
import Details from './details';
import Login from './pages/login/login';
import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
import LoginScreen from './pages/login/login';
import MainScreen from './main';
import DetailScreen from './details';
import Icon from 'react-native-vector-icons/Ionicons';
import DrawerButton from './components/drawerbutton';
  
const MainStack = createStackNavigator({
    Login: {
      screen:LoginScreen,
      navigationOptions:({navigation}) => ({
          headerLeft: <DrawerButton navigation= {navigation} />,
            header: null,
      })
    },
    Main: {
        screen:MainScreen,
        navigationOptions:({navigation}) => ({
            headerLeft: <DrawerButton navigation= {navigation} />, })
      } ,
    Details: {
        screen:DetailScreen,
        navigationOptions:({navigation}) => ({
            headerLeft: <DrawerButton navigation= {navigation} />,
            title: 'FastFood'
         }) 
      } 
  }, 
  {
    initialRouteName: "Main",
    headerLayoutPreset: "center"
  
  });

  const LoginStack = createStackNavigator({
    Login: {
        screen:LoginScreen,
        navigationOptions:{
        headerLeft: <DrawerButton />  
        }, 
  }
});

  const Drawer = createDrawerNavigator({
    Main: {
        screen: MainStack,
        navigationOptions:{
            drawerLabel: 'Ana Sayfa',
            drawerIcon: ({tintColor}) => (
                <Icon 
                name="ios-home"
                size={22}
                color= {tintColor}
                />
            )
        }
    },
    Details: {
        screen: MainStack,
        navigationOptions:{
            drawerLabel: 'Detay Sayfası',
            drawerIcon: ({tintColor}) => (
                <Icon 
                name="ios-home"
                size={22}
                color= {tintColor}
                />
            )
        }
    },
    Login:{
        screen: LoginStack,
        navigationOptions:{
            drawerLabel: 'Çıkış Yap',
            drawerIcon: ({tintColor}) => (
                <Icon 
                name="ios-log-out"
                size={22}
                color= {tintColor}
                />
            ),
        }
    }, 
  }, {
drawerPosition: 'left',
drawerWidth:220,
contentOptions: {
    activeTintColor: '#fff',
    inactiveTintColor: '#444444',
    activeBackgroundColor: '#444444',
    inactiveBackgroundColor: '#fff',
}
  });


  export default createAppContainer(Drawer)