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
  ActivityIndicator,
  FlatList
} from 'react-native';
import { navigationOptions } from 'react-navigation';

class FlatListItem extends Component {
  render() {
    return(
        <View style={{ flex: 1, backgroundColor: this.props.index % 2 == 0 ? 'blue' : 'red'}}>
          <Text style={styles.flatListItem}> {this.props.item.activity} - {this.props.item.description}</Text>  
          <Text style={styles.flatListItem}> Dibuat pada tanggal : {this.props.item.created_at}</Text>  
        </View>
    );
  }
}


export default class Home extends Component <{}> {

  constructor(props){
    super(props);
    this.state = {
      isLoading : true
    }
  }

  componentDidMount(){
    return fetch('http://todo.anak-it.web.id/todo')
    .then((response) => response.json())
    .then((response) => {
      this.setState({
        isLoading : false,
        dataSource : response
      }, function() {
          //do something with new state
          console.log(this.state.dataSource);
      });
    })
    .catch((error) => {
      console.error(error),
      console.log(error)
    });
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex:1, marginTop:50}}>
          <Text style={{color: "black"}}>Sedang Loading Mohon Bersabar</Text>
          <ActivityIndicator />
        </View>
      );
    }
    else{
      return(
        <View>
          <Text>HEELLOOO</Text>
          <FlatList
            data={this.state.dataSource}
            renderItem={({item, index}) => {
              return(
                  <FlatListItem
                      item={item} 
                      index={index}
                  >
                  </FlatListItem>
              );
          }}
            keyExtractor={(item, index) => item.activity}
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#2c3e50'
  },
  flatListItem: {
    padding : 10,
    color: 'black',
    fontSize: 12
  },
});
