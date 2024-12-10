import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // React Navigation container
import { createStackNavigator } from '@react-navigation/stack'; // Stack Navigator
import HomeScreen from './src/screens/HomeScreen'; // Halaman HomeScreen

const Stack = createStackNavigator(); // Buat instance Stack Navigator

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Tambahkan screen pertama */}
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Welcome Home' }} // Opsi header
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
