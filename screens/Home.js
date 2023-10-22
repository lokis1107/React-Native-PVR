import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import MovieCart from '../components/MovieCart';

const Home = () => {
  return (
    <SafeAreaView>
      <View>
        <Header />
      </View>
      <View>
        <MovieCart />
      </View>
    </SafeAreaView>
  );
};

export default Home;
