// SignupScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';


const SignupScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Signup Screen</Text>
      <Button title="Signup" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default SignupScreen;
