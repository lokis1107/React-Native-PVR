import {View, Text, FlatList, Pressable} from 'react-native';
import React, {useContext} from 'react';
import {useRoute} from '@react-navigation/native';
import BackButton from '../components/BackButton';
import {ShareIcon} from 'react-native-heroicons/solid';
import {MovieCards} from '../Context';

const Theatre = props => {
  const route = useRoute();
  const {seats, setSeats} = useContext(MovieCards);
  const onSeatSelect = item => {
    const seatSelected = seats.find(seat => seat === item);
    if (seatSelected) {
      setSeats(seats.filter(seat => seat !== item));
    } else {
      setSeats([...seats, item]);
    }
  };

  const showSeats = () => {
    return (
      <View className="flex-row items-center">
        {seats.map((item, index) => (
          <View key={index}>
            <Text className="ml-2 text-lg font-bold text-gray-900">{item}</Text>
          </View>
        ))}
      </View>
    );
  };

  const fee = 87;
  const nOfSeats = seats.length;
  const total = seats.length > 0 ? fee + nOfSeats * 240 : 0;
  console.log(total);
  return (
    <View>
      <View className="flex-row items-center justify-between mx-2">
        <View className="flex-row items-center justify-between">
          <BackButton />
          <View className="ml-2">
            <Text className="text-2xl font-bold text-gray-900">
              {route.params.name.name}
            </Text>
            <Text className="font-semibold">{route.params.mall}</Text>
          </View>
        </View>
        <View>
          <ShareIcon size={32} color={'black'} />
        </View>
      </View>
      <View className="mt-4">
        <Text className="text-center font-bold text-2xl text-gray-900">
          {route.params.showtimes}
        </Text>
        <Text className="text-center mt-2">CLASSIC (240.00)</Text>
      </View>
      <View className="mt-3 mx-2">
        <FlatList
          numColumns={7}
          data={route.params.table}
          renderItem={({item}) => (
            <Pressable
              onPress={() => onSeatSelect(item)}
              className=" m-2 mt-2 border rounded-lg">
              {seats.includes(item) ? (
                <Text
                  style={{backgroundColor: '#ffc40c', padding: 7}}
                  className="text-lg font-bold text-gray-900">
                  {item}
                </Text>
              ) : (
                <Text
                  style={{padding: 7}}
                  className="text-lg font-bold text-gray-900">
                  {item}
                </Text>
              )}
            </Pressable>
          )}
        />
      </View>
      <View className="mt-10 mx-4 flex-row items-center justify-between">
        <View>
          <Text className="text-lg font-bold text-gray-900">
            The Selected Seats is
          </Text>
          {seats.length > 0 ? (
            showSeats()
          ) : (
            <Text className="text-lg font-bold text-gray-900">
              No Seat Selected
            </Text>
          )}
        </View>
        <View className="w-40 h-16 bg-slate-300 rounded-2xl">
          <Text className="text-lg font-bold text-center text-gray-900">The ₹87 is a </Text>
        <Text className="text-lg font-bold text-center text-gray-900">GST of our theatre</Text>
        </View>
      </View>
      <View className="mt-24 mx-14">
        <Pressable
          style={{backgroundColor: '#ffc40c'}}
          className=" p-4 rounded-xl flex-row items-center justify-between">
          {seats.length > 0 ? (
            <Text className="text-lg font-bold text-gray-900">
              {seats.length} Seat's Selected
            </Text>
          ) : (
            <Text></Text>
          )}
          <Text className="text-xl font-bold text-left text-gray-900">
            Pay ₹{total}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Theatre;
