import React,{Component} from 'react';
import {Text,View,Alert} from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import Hesap from './Hesap'


export default class Detay extends Component{

    componentWillMount()
    {
        fetch('https://bankwebservice20191202103050.azurewebsites.net/api/hesap/sil/'+this.props.navigation.state.params.hesapNo, {
  method: 'get',
  headers: {
    'Accept': 'application/json, text/plain, /',
    'Content-Type': 'application/json'
  }}).then(res=>res.json()).then(res=>console.log(res))
  this.props.navigation.navigate('Hesap');
    }
    
    render()
    {
       return(
           <Text>Silindi</Text>
       );
        
    }
}