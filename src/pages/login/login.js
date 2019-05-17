import React, { Component } from 'react';
import { Text, StyleSheet, View, ScrollView, KeyboardAvoidingView,TouchableOpacity } from 'react-native';
import LoginForm from './loginForm';


class Login extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headBackground} />
        
          <Text style={styles.logo}>Elexus</Text>
          <Text style={styles.logoDescription}>Hotel</Text>
           <ScrollView><KeyboardAvoidingView> 
          <View style={styles.loginArea} >
            <Text style={styles.loginAreaTitle}>Giriş Yap</Text>
            <Text style={styles.loginAreaDescription}> Otelimize hoşgeldiniz.Misafir üyeliğiniz yoksa kaydolunuz.</Text>
            <LoginForm />
          </View>
        </KeyboardAvoidingView></ScrollView>
        <View style={styles.signUpArea}> 
          <Text style={styles.signupDescription}>Hesabınız yok mu?</Text>
          <TouchableOpacity><Text styles={styles.signUpText}>Kaydol</Text></TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingVertical: 10
  },
  headBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 250,
    width: '100%',
    backgroundColor: '#1572de'
  },
  logo: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: '#f2f2f2'
  },
  logoDescription: {
    textAlign: 'center',
    color: '#f2f2f2'
  },
  loginArea: {
    marginHorizontal: 40,
    marginVertical: 40,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 5,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 4,
  },
  loginAreaTitle: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',

  },
  loginAreaDescription: {
    fontSize: 15,
    color: '#7e868f',
    marginVertical: 10,
    textAlign: 'center',
  },
  signUpArea:{
    alignItems:'center',
    paddingVertical: 10
  },
  signupDescription:{
    color:'#999',
  },
  signUpText:{
    color:'black',
  },
})

export default Login;
