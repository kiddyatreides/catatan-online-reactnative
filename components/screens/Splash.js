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
  ActivityIndicator
} from 'react-native';
import { navigationOptions, NavigationActions } from 'react-navigation';

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({
      routeName: "Login",
      params: {  }
    })
  ]
});

export default class Splash extends Component<{}> {

  componentDidMount(){
    var { navigate } = this.props.navigation;
    this.timeOutHandle = setTimeout(() => {
      this.props.navigation.dispatch(resetAction);
    }, 5000);
  }

  componentWillUnmount(){
    clearTimeout(this.timeOutHandle);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <ActivityIndicator size="large" color="white" style={{marginTop:25}} />
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
