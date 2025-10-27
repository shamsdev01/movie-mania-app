import { icons } from '@/constants/icons';
import React from 'react';
import { Image, Pressable, TextInput, View } from 'react-native';

interface Props {
    placeholder: string;
    onPress?: () => void;
    value?: string;
    onChangeText?: (text: string) => void;
}
const SearchBar = ({onPress, placeholder, value, onChangeText}: Props) => {
  return (
    <Pressable onPress={onPress} className='active:opacity-90'>
      <View className='flex-row items-center bg-dark-200 rounded-full px-5  py-4 '>
        <Image source={icons.search} resizeMode='contain' className='size-5' tintColor='#ab8bff'/>
        <TextInput
           editable={!onPress}
           placeholder={placeholder}
           value={value}
           onChangeText={onChangeText}
           placeholderTextColor='#a8b5db'
           className='flex-1 ml-2 text-white'
        />
      </View>
    </Pressable>
  )
}
 
export default SearchBar