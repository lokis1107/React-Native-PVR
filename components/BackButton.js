import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import {useNavigation} from '@react-navigation/native';

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Pressable onPress={() => navigation.goBack()} className="p-3">
        <ArrowLeftIcon size={35} color={'black'} />
      </Pressable>
    </View>
  );
};

export default BackButton;
