/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  BackHandler,
  Header
} from 'react-native';
import { navigationOptions } from 'react-navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}


export default class Login extends Component<{}> {

  static navigationOptions = {
    headerRight: <Button title="Info" />,
  };

  componentDidMount(){
    
  }

  componentWillUnmount(){
    
  }

  render() {

    var { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
      
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, please login
        </Text>
        <TextInput 
        style={{width: 300, color:"white"}}
        placeholder="Masukkan username anda...."
        placeholderTextColor="white"
        underlineColorAndroid="white"
        />
        <TextInput 
        style={{width: 300, color:"white"}}
        secureTextEntry={true}
        placeholder="Masukkan password anda...."
        placeholderTextColor="white"
        underlineColorAndroid="white"
        />
        <View style={{ marginTop: 20}}>
            <Button
                title= "Login"
                color="#3498db"
                onPress = {() => navigate('Home')}
                >
            </Button>
        </View>
        {/* <Text style={styles.instructions}>
          {instructions}
        </Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white'
  },
  instructions: {
    textAlign: 'center',
    color: 'white',
    marginBottom: 5,
  },
});
