import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './Components/SplashScreen';
import DetailScreen from "./src/screens/detail";

const Stack = createNativeStackNavigator();

export default function App() {
  StatusBar.setBarStyle('light-content', true);
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
      <Stack.Screen name="detail" component={DetailScreen}  options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}