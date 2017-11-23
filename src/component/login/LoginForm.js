import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
    Button,
    StyleSheet,
    StatusBar
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const onButtonPress = () => {
    Alert.alert('Button has been pressed!');
};

export default class LoginForm extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content"/>
                <TextInput
                    style={styles.input}
                    autoCapitalize="none"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    autoCorrect={false}
                    keyboardType='email-address'
                    returnKeyType="next"
                    placeholder='Email or Mobile Num'
                    underlineColorAndroid = 'transparent'
                    placeholderTextColor='rgba(225,225,225,0.7)'/>

                <TextInput
                    style={styles.input}
                    returnKeyType="go"
                    ref={(input) => this.passwordInput = input}
                    placeholder='Password'
                    underlineColorAndroid = 'transparent'
                    placeholderTextColor='rgba(225,225,225,0.7)'
                    secureTextEntry/>
                <TouchableOpacity style={styles.buttonContainer} onPress={Actions.dashboardScreen}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
                <Text style={styles.text}>Dont have account yet? Register Here </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
       },
       input:{
           height: 45,
           backgroundColor: 'rgba(225,225,225,0.2)',
           marginBottom: 10,
           padding: 16,
           color: '#fff'
       },
       buttonContainer:{
           backgroundColor: '#2980b6',
           paddingVertical: 15
       },
       buttonText:{
           color: '#fff',
           textAlign: 'center',
           fontWeight: '700'
       },
       loginButton:{
         backgroundColor:  '#2980b6',
          color: '#fff'
   },
   text: {
     color: '#FFF',
     marginTop: 16,
     opacity: 0.9,
     textAlign: 'center',
     marginBottom: 5
   }
});
