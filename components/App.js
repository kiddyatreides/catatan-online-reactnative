import React, { Component } from 'react';

import { StackNavigator } from 'react-navigation';
import Login from './screens/Login';
import Home from './screens/Home2';
import Splash from './screens/Splash';
import Modal from './screens/Modal';

const App = StackNavigator({
    Splash: {
        screen: Splash, 
        navigationOptions : 
        {
            header: null,
            title: "Splash"
        }
    },
    Login: {
        screen: Login, 
        navigationOptions : 
        {
            title: "Login"
        }
    },
    Home: {
        screen: Home, 
        navigationOptions : 
        {
            title: "Home"
        }
    },
    Modal: {
        screen: Modal, 
        navigationOptions : 
        {
            title: "Modal"
        }
    },

});

export default App;