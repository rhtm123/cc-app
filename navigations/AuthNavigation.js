// Navigation.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import LoginScreen from '../screens/Login';
import SignupScreen from '../screens/Signup';
import LoadingScreen from '../screens/Loading';
import SelfPacedCoursesScreen from '../screens/SelfPacedCourses';


const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator 
    screenOptions={{
        headerShown: false
      }}
    initialRouteName="Home">
      {/* <Stack.Screen name="Loading" component={LoadingScreen} /> */}

      {/* <Stack.Screen name="Login" component={LoginScreen} 
      options={{ headerLeft: null }}
      /> */}
      {/* <Stack.Screen name="Signup" component={SignupScreen} /> */}
      <Stack.Screen name="Home"
       component={HomeScreen}

       />

      <Stack.Screen name="SelfPacedCourses"
       component={SelfPacedCoursesScreen}

       />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
