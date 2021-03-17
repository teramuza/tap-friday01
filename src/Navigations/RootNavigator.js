//@flow

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import MainStackNavigator from './MainStackNavigator';
import MainTabNavigator from './MainTabNavigator';

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName="stacks">
      <Stack.Screen name="stacks" component={MainStackNavigator} />
      <Stack.Screen name="tabs" component={MainTabNavigator} />
    </Stack.Navigator>
  );
};

export default () => (
  <NavigationContainer>
    <RootStack />
  </NavigationContainer>
);
