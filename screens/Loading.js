// LoadingScreen.js
import React, { useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoadingScreen = ({ navigation }) => {
  useEffect(() => {
    const checkToken = async () => {
      try {
        // Check if a token is stored in AsyncStorage
        const token = await AsyncStorage.getItem('token');
        if (token) {
          // Token found, navigate to Home screen
          navigation.navigate('Home');
        } else {
          // Token not found, navigate to Login screen
          navigation.navigate('Login');
        }
      } catch (error) {
        console.error('Error checking token:', error);
        // Handle error, e.g., navigate to Login screen
        navigation.navigate('Login');
      }
    };

    // Call the checkToken function
    checkToken();
  },[navigation]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
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

export default LoadingScreen;
