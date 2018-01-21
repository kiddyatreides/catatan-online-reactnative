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
  RefreshControl,
  Modal
} from 'react-native';
import { navigationOptions } from 'react-navigation';

class FlatListItem extends Component {
  render() {
    return(
        <View style={{ flex: 1, backgroundColor: this.props.index % 2 == 0 ? '#e74c3c' : '#2980b9'}}>
          <Text style={styles.flatListItem}> {this.props.item.activity} - {this.props.item.description}</Text>  
          <Text style={styles.flatListItem}>({this.props.item.created_at})</Text>  
        </View>
    );
  }
}

class Header extends Component{
  state = {
    modalVisible: false,
  };
  

  openModal() {
    this.setState({modalVisible:true});
  }

  closeModal() {
    this.setState({modalVisible:false});
  }

  render() {
    
    return (
      <View style={{flex:1, margin:10}}>
        <Modal
              visible={this.state.modalVisible}
              animationType={'slide'}
              onRequestClose={() => this.closeModal()}
          >
        <View style={styles.modalContainer}>
          <Text style={styles.welcome}>
            Tambah Catatan Baru
          </Text>
          <Text style={{color:'white'}}>
            Silahkan masukkan deskripsi
          </Text>
          <TextInput 
          style={{width: 300, color:"white"}}
          placeholder="Masukkan kegiatan anda...."
          placeholderTextColor="white"
          underlineColorAndroid="white"
          />
          <TextInput 
          style={{width: 300, color:"white"}}
          secureTextEntry={true}
          placeholder="Masukkan deskripsi...."
          placeholderTextColor="white"
          underlineColorAndroid="white"
          />
          <View style={{ marginTop: 20}}>
              <Button
                  title= "Login"
                  color="#3498db"
                  onPress = {() => this.props.navigation.navigate('Home')}
                  >
              </Button>
          </View>
          {/* <Text style={styles.instructions}>
            {instructions}
          </Text> */}
      </View>
          </Modal>
        <Button title="Add Data" onPress={() => this.openModal()} color="red" />
      </View>
    );
  }
}

const MyPhotosHomeScreen = ({ navigation }) => (
  <Header navigation={navigation} />
);

export default class Home extends Component <{}> {

  static navigationOptions  = {
    headerRight: <Header />,
  }


  constructor(props){
    super(props);
    this.state = {
      isLoading : true,
      error: null
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
  modalContainer: {
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
  flatListItem: {
    padding : 10,
    color: 'white',
    fontSize: 12
  },
});
