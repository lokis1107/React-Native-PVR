import {View, Text, FlatList, Pressable, Image} from 'react-native';
import React from 'react';
import {movies} from '../data';
import {useNavigation} from '@react-navigation/native';

const MovieCart = () => {
  const navigation = useNavigation();

  return (
    <View className="mt-3">
      <FlatList
        showsVerticalScrollIndicator={false}
        data={movies}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={{paddingBottom: 780}}
        renderItem={({item}) => (
          <Pressable style={{margin: 10, marginHorizontal: 15}}>
            <View>
              <Image
                source={{uri: item.image}}
                style={{aspectRatio: 2 / 2.7, height: 240}}
                className="rounded-2xl"
              />
              <View>
                <Text className="mt-1 text-lg font-bold text-gray-950 ml-2">
                  {item.name}
                </Text>
                <Text className="ml-2"> U/A • {item.language}</Text>
                <Text className="ml-2 font-bold text-gray-900 text-lg">
                  {item.genre}
                </Text>
              </View>
              <View>
                <Pressable
                  onPress={() => navigation.navigate('Movie', {...item})}
                  className="p-3 mt-1 rounded-2xl borde w-44"
                  style={{backgroundColor: '#ffc40c'}}>
                  <Text className="text-xl font-bold text-white text-center">
                    Book
                  </Text>
                </Pressable>
              </View>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

export default MovieCart;
