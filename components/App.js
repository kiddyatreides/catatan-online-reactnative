import React, { Component } from 'react';

import { StackNavigator } from 'react-navigation';
import Login from './screens/Login';
import Home from './screens/Home2';
import Splash from './screens/Splash';

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
            header: null,
            title: "Login"
        }
    },
    Home: {
        screen: Home, 
        navigationOptions : 
        {
            header: null,
            title: "Home"
        }
    },

});

export default App;