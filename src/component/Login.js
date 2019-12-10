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
import Register from './Register'
import axios from 'axios'
import Hesap from './Hesap'

export default class Login extends Component {

  constructor(props) {
    super(props)
    this.state = { numara: "" ,tc:"",sifre:""}
  }
  onPress=()=>
  {
   
      fetch('https://bankwebservice20191202103050.azurewebsites.net/api/musteri/login', {
        method: 'post',
        headers: {
          'Accept': 'application/json, text/plain, /',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({tc:this.state.tc,sifre:this.state.sifre})
      }).then(res=>res.json())
        .then(res =>this.setState({numara:Number(res)}));
      
    
   

if(!isNaN(this.state.numara) && this.state.numara!="" && this.state.tc.length==11 && this.state.sifre.length==4)
{
  console.log(this.state.numara);
  this.props.navigation.navigate('Hesap',{hesapNumara:this.state.numara});
}
else
{
  Alert.alert("Hatalı giriş");
}
  }
    
  


   
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="T.C"
              keyboardType={'numeric'}
              maxLength={11}
              underlineColorAndroid='transparent'
              onChangeText={(tc) => this.setState({tc:tc})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              maxLength={6}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({sifre:password})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this.onPress}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('Register')}>
            <Text>Forgot your password?</Text>
        </TouchableHighlight>

        <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('Register')}>
            <Text>Register</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});
 