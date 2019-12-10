import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  TouchableOpacity
} from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import Detay from './Detay';




export default class Hesap extends Component{
  constructor(props) {
    super(props)
    this.state={data : [],hesapNo:""}
  }
  
 
  componentWillMount()
  {
    fetch('https://bankwebservice20191202103050.azurewebsites.net/api/hesap/hesapListele/'+this.props.navigation.state.params.hesapNumara, {
      method: 'get',
      headers: {
        'Accept': 'application/json, text/plain, /',
        'Content-Type': 'application/json'
      }}).then(res=>res.json())
      .then(res =>this.setState({data:this.state.data.concat(res)}));
      
  }
  
  renderData()
  {
    return this.state.data.map(res =>
      <TouchableOpacity onPress={()=>this.props.navigation.navigate('Detay',{hesapNo:res.hesapNumarasi})}>
  <Text >{res.hesapNumarasi}      {res.bakiye}</Text>
  </TouchableOpacity>
      );
      
  }
    onPress=()=>{
        fetch('https://bankwebservice20191202103050.azurewebsites.net/api/hesap/hesapac/'+this.props.navigation.state.params.hesapNumara, {
  method: 'get',
  headers: {
    'Accept': 'application/json, text/plain, /',
    'Content-Type': 'application/json'
  }}).then(res=>res.json())
  .then(res =>console.log(res));
console.log(this.props.navigation.state.params.hesapNumara);

    }
    render()
    {
        return (
          <View >
            <TouchableOpacity  onPress={this.onPress} underlayColur="white">
              <View style={styles.button}>
            <Text style={styles.buttonText}>Hesap Oluştur</Text>
            </View>
            </TouchableOpacity>
    {this.renderData()}
           
          </View>
        )
    }

  }
  const styles = StyleSheet.create({  
    container: {  
        paddingTop: 60,  
        alignItems: 'center'  
    },  
    button: {  
        marginBottom: 30, 
         
        width: 260,  
        alignItems: 'center',  
        backgroundColor: '#5ead97'  
    },  
    buttonText: {  
        padding: 20,  
        color: 'white',  
        fontSize: 18,
        alignItems: 'center'
    }  
});  