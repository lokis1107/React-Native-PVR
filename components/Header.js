import {View, Text, ImageBackground, Pressable, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {type} from '../data';

const Header = () => {
  const [active, setActive] = useState('IMAX');
  return (
    <View style={{backgroundColor: '#F5F5F5'}}>
      <View>
        <ImageBackground
          source={{
            uri: 'https://imgs.search.brave.com/9gExPgKL9mmArk-OwVTaoTfmOvnHWZEtcO1AtQ8Nq44/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/bmFsYW5kYW9wZW51/bml2ZXJzaXR5LmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/My8wOC9KQUlMRVIt/T1RULVJFTEVBU0Ut/REFURS1QTEFURk9S/TS0xMDI0eDY4My5q/cGc',
          }}
          style={{height: 225, aspectRatio: 3.8 / 2}}
        />
      </View>
      <View>
        <Pressable
          className="mx-4 bg-white -mt-12 shadow-lg rounded-xl"
          style={{height: 150}}>
          <View>
            <Text className="text-lg font-bold ml-2">Running Successfully</Text>
          </View>
          <View className="flex-row items-center justify-between ml-3 mt-1">
            <View>
              <Text className="text-2xl font-bold text-gray-900">JAILER</Text>
              <Text className="text-lg font-semibold">U/A • TAMIL</Text>
            </View>
            <View>
              <Pressable className="mx-4 p-3 rounded-2xl borde w-28" style={{backgroundColor:"#ffc40c"}}>
                <Text className="text-xl font-bold text-white text-center">
                  Book
                </Text>
              </Pressable>
            </View>
          </View>
          <View className="ml-3 mt-2">
            <Text className="text-lg font-bold text-gray-900">
              Fantasy, Family, Action
            </Text>
          </View>
        </Pressable>
      </View>
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 15}}>
          {type.map((item, index) => {
            let isActive = item == active;
            let TextColor = `text-lg ${
              isActive ? 'text-lg text-white font-bold text-center' : ''
            }`;
            let bgColor = `${
              isActive ? 'p-1 w-32 mx-1 bg-yellow-400 rounded-lg mt-4' : 'p-1  mx-1 rounded-lg mt-4'
            }`;
            return (
              <Pressable
                key={index}
                onPress={() => setActive(item)}
                className={bgColor}>
                <Text className={TextColor}>{item.name}</Text>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default Header;
