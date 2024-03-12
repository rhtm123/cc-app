
import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import { StyleSheet } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';


const AboutScreen = ({ navigation }) => {



  return (
    <View style={styles.container}>
          <Text>Welcome to Coding Chaska App</Text>
          <Text>We will find self-paced courses here</Text>


        </View>
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
export default AboutScreen;