
import React from 'react';
import { View, Text, Button } from 'react-native';
import { StyleSheet } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';


const HomeScreen = ({ navigation }) => {

    const handleClick = async () => {
        // For simplicity, let's just navigate back to the Login screen
        // await AsyncStorage.removeItem('token');
        navigation.navigate('SelfPacedCourses');
      };

  return (
    <View style={styles.container}>
          <Text>Welcome to Coding Chaska App</Text>
          <Text>We will find self-paced courses here</Text>
          <Button title="Click" onPress={handleClick} />
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
  
export default HomeScreen;