import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {Screens} from '@app/types/navigation';
import linking from './LinkingConfiguration';

import LoginScreen from '@app/screens/Login';
import HomeScreen from '@app/screens/Home';
import ARTest from '@app/screens/ARTest';

export default function Navigator() {
  return (
    <NavigationContainer linking={linking}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<Screens>();

function RootNavigator() {
  return (
    <>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Test"
          component={ARTest}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
}
