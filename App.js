import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import SignupScreen from './screens/SignupScreen';
import LoginScreen from './screens/LoginScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Inscription Bts Sio Lycée Jean Rostand" component={HomeScreen} />
        <Stack.Screen name="Inscription" component={SignupScreen} />
        <Stack.Screen name="Connexion" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;