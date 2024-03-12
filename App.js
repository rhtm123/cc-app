import { StatusBar } from 'expo-status-bar';

import { PaperProvider } from 'react-native-paper';
import { MD3LightTheme as DefaultTheme } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from './navigations/AuthNavigation';


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <StatusBar style="auto" />

        <AuthNavigator />
        
      </PaperProvider>
    </NavigationContainer>
  );
}
