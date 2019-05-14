import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Form from './components/Form';
import Main from './main';
import Loading from './components/loading';
import Details from './details';
export default class Root extends Component {
    render() {
        return(
            <Router>
                <Scene
                    key='Root'hideNavBar={true}>
                    <Scene key='auth'>
                    <Scene 
                    key='Main'
                    component={Main}
                    initial
                    hideNavBar='true'
                    />
                    </Scene>
                    <Scene key='Details' >
                    <Scene
                    key='detail'
                    component={Details}
                    title='mehmet'
                    hideNavBar='false'
                    >
                    </Scene>
                    </Scene>
                </Scene>
            </Router>
        );
    }
}
