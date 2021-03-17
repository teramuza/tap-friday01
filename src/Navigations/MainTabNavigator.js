//@flow

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Routes} from './Routes';
import {DetailScreen, HomeScreen} from '../Screens/Screen.config';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabStack = () => {
  return (
    <Stack.Navigator initialRouteName={Routes.HomeScreen}>
      <Stack.Screen name={Routes.HomeScreen} component={HomeScreen} />
      <Stack.Screen name="AnotherScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

const ProfileTabStack = () => {
  return (
    <Stack.Navigator initialRouteName={Routes.ProfileScreen}>
      <Stack.Screen name={Routes.ProfileScreen} component={DetailScreen} />
      <Stack.Screen name={Routes.DetailScreen} component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default () => (
  <Tab.Navigator>
    <Tab.Screen name={Routes.HomeTab} component={HomeTabStack} />
    <Tab.Screen name={Routes.ProfileTab} component={ProfileTabStack} />
  </Tab.Navigator>
);
