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
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import DatePicker from 'react-native-datepicker';


export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {numara: "",tc:"",sifre:"",isim:"",soyisim:"",cinsiyet:false,dogumTarihi:"",
                      mail:"",cepTelefonu:"",evTelefonu:"",musteriAdresi:""}
    }

    onPress=() => {
      if(this.state.tc.length<11 || this.state.sifre.length<4 || this.state.isim.length<3
       || this.state.soyisim.length<2 || this.state.mail=="" || this.state.cepTelefonu.length<11
       || this.state.dogumTarihi=="")
      {
        Alert.alert(
          'Lütfen değerleri doğru giriniz.'
        )
      }
      else{
          fetch('https://bankwebservice20191202103050.azurewebsites.net/api/musteri/kayit', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    
    body: JSON.stringify(
      {
        tc: this.state.tc,
        sifre:this.state.sifre,
        isim:this.state.isim,
        soyisim:this.state.soyisim,
        cinsiyet:this.state.cinsiyet,
        dogumTarihi:this.state.dogumTarihi,
        mail:this.state.mail,
        cepTelefonu:this.state.cepTelefonu
      })
    }).then(res=>res.json()).then(res => console.log(res));
      }
    }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="TC giriniz"
              keyboardType={'numeric'}
              maxLength={11}
              underlineColorAndroid='transparent'
              onChangeText={(tc) => this.setState({tc:tc})}/>
        </View>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="İsim"
              keyboardType={'default'}
              maxLength={20}
              underlineColorAndroid='transparent'
              onChangeText={(isim) => this.setState({isim:isim})}/>
        </View>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Soyisim"
              keyboardType={'default'}
              maxLength={20}
              underlineColorAndroid='transparent'
              onChangeText={(soyisim) => this.setState({soyisim:soyisim})}/>
        </View>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Şifre"
              keyboardType={'default'}
              maxLength={4}
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({sifre:password})}/>
        </View>
        
        <View>
          <DatePicker
        style={{width: 200}}
        date={this.state.dogumTarihi}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="1960-05-01"
        maxDate="2001-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({dogumTarihi: date})}}
      />
      
        </View>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="E-mail"
              secureTextEntry={true}
              keyboardType={'email-address'}
              maxLength={20}
              underlineColorAndroid='transparent'
              onChangeText={(mail) => this.setState({mail:mail})}/>
        </View>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Cep Telefonu"
              keyboardType={'phone-pad'}
              maxLength={11}
              underlineColorAndroid='transparent'
              onChangeText={(cepTelefonu) => this.setState({cepTelefonu:cepTelefonu})}/>
        </View>
      <View>
        <RadioForm
          radio_props={radio_props}
          initial={0}
          onPress={(value) => {this.setState({cinsiyet:value})}}
        />
      </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this.onPress}>
          <Text style={styles.loginText}>Kayıt Ol</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

var radio_props = [
  {label: 'Erkek', value: 1 },
  {label: 'Kadın', value: 0 }
];

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
      height:38,
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