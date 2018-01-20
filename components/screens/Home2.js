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
  FlatList, 
  RefreshControl
} from 'react-native';
import { navigationOptions } from 'react-navigation';

class FlatListItem extends Component {
  render() {
    return(
        <View style={{ flex: 1, backgroundColor: this.props.index % 2 == 0 ? '#e74c3c' : '#2980b9'}}>
          <Text style={styles.flatListItem}> {this.props.item.activity} - {this.props.item.description}</Text>  
          <Text style={styles.flatListItem}>({this.props.item.created_at}</Text>  

          {/* <Text style={styles.flatListItem}> Dibuat pada tanggal : {item.created_at}</Text>   */}
        </View>
    );
  }
}


export default class Home extends Component <{}> {

  constructor(props){
    super(props);
    this.state = {
      isLoading : true,
      error: null,
      refreshing: false,
    }
  }

  fetchData = () => {
    const { page, seed } = this.state;
    const url = 'http://todo.anak-it.web.id/todo';
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res,
          isLoading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, isLoading : true });
      });
  };

  _onRefresh() {
    this.setState({ refreshing: true }, 
      function() { 
        this.fetchData() 
      });
  }

  componentDidMount(){
    this.fetchData();
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex:1, marginTop:50}}>
          <Text style={{color: "black", alignItems: 'center', justifyContent: 'center',}}>Sedang Loading Mohon Bersabar</Text>
          <ActivityIndicator />
        </View>
      );
    }
    else{
      return(
        <View>
          <View style={styles.container}>
            <Text style={{fontSize: 15, marginBottom: 10, alignItems: 'center', color: "black", alignItems: 'center', justifyContent: 'center',}}>Daftar Kegabutan Saya</Text>
          </View>
          <FlatList
            data={this.state.data}
            refreshing={this.state.refreshing}
            onRefresh={() => this._onRefresh()}
            renderItem={({item, index}) => {
              return(
                <FlatListItem item={item} index={index}>
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
    marginTop:10,
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
    color: 'white',
    fontSize: 12
  },
});
