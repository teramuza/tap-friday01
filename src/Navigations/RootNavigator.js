//@flow

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import MainTabNavigator from './MainTabNavigator';
import {DetailScreen, HomeScreen} from '../Screens/Screen.config';

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName="tabs">
      <Stack.Screen name="stack1" component={HomeScreen} />
      <Stack.Screen name="stack2" component={DetailScreen} />
      <Stack.Screen name="tabs" component={MainTabNavigator} />
    </Stack.Navigator>
  );
};

export default () => (
  <NavigationContainer>
    <RootStack />
  </NavigationContainer>
);
