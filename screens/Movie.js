import {View, Text, SafeAreaView, Pressable, FlatList} from 'react-native';
import React, {useState} from 'react';
import BackButton from '../components/BackButton';
import {
  MagnifyingGlassIcon,
  Bars3CenterLeftIcon,
  ShareIcon,
  WrenchIcon,
} from 'react-native-heroicons/solid';
import HorizontalDatepicker from '@awrminkhodaei/react-native-horizontal-datepicker';
import {malls} from '../data';
import {useNavigation} from '@react-navigation/native';

const Movie = props => {
  let item = props.route.params;
  const [selectedDate, setSelectedDate] = useState('');
  const [mall, setMall] = useState([]);
  const navigation = useNavigation();
  const [seatData, SetseatData] = useState([]);

  return (
    <SafeAreaView>
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center">
          <BackButton />
          <Text className="text-2xl font-bold ml-2 text-gray-900">
            {item.name}
          </Text>
        </View>
        <View className="flex-row items-center justify-between mt-2">
          <MagnifyingGlassIcon size={32} color={'black'} />
          <Bars3CenterLeftIcon size={32} color={'black'} />
          <ShareIcon size={32} color={'black'} />
        </View>
      </View>
      <View className="flex-row items-center mx-4">
        <WrenchIcon color={'orange'} size={25} />
        <Text className="font-bold text-lg text-gray-900 ml-2">
          Your safety is our priority
        </Text>
      </View>
      <View className="mt-5">
        <HorizontalDatepicker
          mode="gregorian"
          startDate={new Date('2023-10-05')}
          endDate={new Date('2023-10-31')}
          initialSelectedDate={new Date('2020-08-22')}
          onSelectedDateChange={date => setSelectedDate(date)}
          selectedItemWidth={170}
          unselectedItemWidth={38}
          itemHeight={38}
          itemRadius={10}
          selectedItemBackgroundColor="#222831"
          unselectedItemBackgroundColor="#ececec"
        />
      </View>
      <View>
        {malls.map((item, index) => (
          <Pressable
            onPress={() => {
              setMall(item.name);
              SetseatData(item.tableData);
            }}
            key={index}
            className="m-4">
            <Text className="text-lg font-bold text-gray-900">{item.name}</Text>
            {mall.includes(item.name) ? (
              <FlatList
                data={item.showtimes}
                numColumns={3}
                renderItem={({item}) => (
                  <Pressable
                    onPress={() =>
                      navigation.navigate('Theatre', {
                        mall: mall,
                        name: props.route.params,
                        showtimes: item,
                        table: seatData,
                      })
                    }
                    className="border w-28 rounded-lg p-2 m-2">
                    <Text className="text-lg font-bold text-center text-gray-900">
                      {item}
                    </Text>
                  </Pressable>
                )}
              />
            ) : null}
          </Pressable>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Movie;
