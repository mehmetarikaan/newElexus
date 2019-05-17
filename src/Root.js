import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Main from './main';
import Details from './details';
import Login from './pages/login/login';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from './pages/login/login';
import MainScreen from './main';
import DetailScreen from './details';
export default class Root extends Component {
    render() {
        return(
            <AppContainer />
            // <Router>
            //     <Scene
            //         key='Root'hideNavBar={true}>
            //         <Scene key='auth'>
            //         <Scene 
            //         key='login'
            //         component={Login}
                    
            //         hideNavBar={true}
            //         />
            //         <Scene 
            //         key='Main'
            //         component={Main}
            //         hideNavBar='true'
            //         initial
            //         />
            //         </Scene>
            //         <Scene key='Details' >
            //         <Scene
            //         key='detail'
            //         component={Details}
            //         title='mehmet'
            //         hideNavBar='false'>
            //         </Scene>
            //         </Scene>
            //     </Scene>
            // </Router>
        );
        
    }
}

const AppNavigator = createStackNavigator({
    Login:{
     screen: LoginScreen
    },
    Main:{
       screen: MainScreen
      },
    Details:{
      screen: DetailScreen
    },
  }, 
  {
    initialRouteName: "Main",
    headerLayoutPreset: "center"
  
  })
  const AppContainer = createAppContainer(AppNavigator);