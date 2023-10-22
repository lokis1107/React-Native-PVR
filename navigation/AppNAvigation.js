import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Movie from '../screens/Movie';
import Theatre from '../screens/Theatre';

const Stack = createNativeStackNavigator();

const AppNAvigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Movie"
        component={Movie}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Theatre"
        component={Theatre}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AppNAvigation;
