// Navigation.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
// import LoginScreen from '../screens/Login';
// import SignupScreen from '../screens/Signup';
// import LoadingScreen from '../screens/Loading';
import SelfPacedCoursesScreen from '../screens/SelfPacedCourses';


const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator 
    screenOptions={{
        headerShown: false
      }}
    initialRouteName="HomeScreen">

      <Stack.Screen name="HomeScreen"
       component={HomeScreen}

       />

      <Stack.Screen name="SelfPacedCourses"
       component={SelfPacedCoursesScreen}

       />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
