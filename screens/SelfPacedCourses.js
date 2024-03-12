// SelfPacedCoursesScreen.js
import { useState } from 'react';
import React from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';

import { Appbar, TextInput} from 'react-native-paper';
import { Button } from 'react-native-paper';



const SelfPacedCoursesScreen = ({ navigation }) => {

  return (
    <>
    <Appbar.Header>
    {/* <Appbar.BackAction onPress={() => {}} /> */}
    <Appbar.Content title="Courses" />
    {/* <Appbar.Action icon="calendar" onPress={() => {}} /> */}
    {/* <Appbar.Action icon="magnify" onPress={() => {}} /> */}
    </Appbar.Header>
    
    <View style={styles.container}>
          <Text>Welcome to Coding Chaska App</Text>
          <Text>We will find self-paced courses here</Text>
          {/* <Button title="Logout" onPress={handleLogout} /> */}
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


export default SelfPacedCoursesScreen;
