//@flow

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DetailScreen, HomeScreen} from '../Screens/Screen.config';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator initialRouteName="stack1">
    <Stack.Screen name="stack1" component={HomeScreen} />
    <Stack.Screen name="stack2" component={DetailScreen} />
  </Stack.Navigator>
);
