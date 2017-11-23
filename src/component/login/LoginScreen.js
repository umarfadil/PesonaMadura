/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component, PropTypes} from 'react';
import {Platform, StyleSheet, Text, View, Image, KeyboardAvoidingView} from 'react-native';
import {Actions} from 'react-native-router-flux';
import LoginForm from '../login/LoginForm'

export default class LoginScreen extends Component < {} > {
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View style={styles.loginContainer}>
                    <Image
                        resizeMode="contain"
                        style={styles.logo}
                        source={require('../../assets/logo.png')}/>
                    <Text style={[styles.title]}>Pesona Madura</Text>
                    <Text style={[styles.subtitle]}>Selamat Datang dan Berlibur di Pulau Madura</Text>
                </View>

                <View style={styles.formContainer}>
                    <LoginForm/>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
    loginContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        position: 'absolute',
        width: 300,
        height: 100
    },
    title:{
        color: "#FFF",
        marginTop: 5,
        opacity: 0.9,
        textAlign: 'center',
        marginTop: 165,
        fontSize : 32
    },
    subtitle: {
      color: '#FFF',
      marginTop: 5,
      opacity: 0.9,
      textAlign: 'center',
      marginBottom: 5
    },
});
