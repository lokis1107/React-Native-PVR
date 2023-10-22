import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNAvigation from './navigation/AppNAvigation';
import {MovieContext} from './Context';

const App = () => {
  return (
    <MovieContext>
      <NavigationContainer>
        <StatusBar hidden />
        <AppNAvigation />
      </NavigationContainer>
    </MovieContext>
  );
};

export default App;
