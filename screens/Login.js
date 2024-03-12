// LoginScreen.js
import { useState } from 'react';
import React from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Appbar, TextInput} from 'react-native-paper';
import { Button } from 'react-native-paper';



const LoginScreen = ({ navigation }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setLoggedIn] = useState(false);

    const handleLogin = async () => {
        // Implement your actual authentication logic here
        // For simplicity, let's consider a successful login if both username and password are non-empty
        if (username !== '' && password !== '') {
          setLoggedIn(true);
          await AsyncStorage.setItem('token', 'yourAuthToken');

          navigation.navigate('Home');
        }
      };
    
  return (
    <>
    <Appbar.Header>
    {/* <Appbar.BackAction onPress={() => {}} /> */}
    <Appbar.Content title="Login" />
    {/* <Appbar.Action icon="calendar" onPress={() => {}} /> */}
    {/* <Appbar.Action icon="magnify" onPress={() => {}} /> */}
    </Appbar.Header>
    
    <View style={styles.container}>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.mt4}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.mt4}

      />
      <Button  
        style={styles.button}
      mode="contained" onPress={handleLogin}>
            Submit
        </Button>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:16,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  mt4: {
    marginTop: 8,
  },

  button: {
    marginTop:4, 
    padding:6,
  }
});


export default LoginScreen;
