import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'

interface Props {
    placeholder: string;
    onPress: () => void;
}
const SearchBar = ({onPress, placeholder}: Props) => {
  return (
    <View className='flex-row items-center bg-dark-200 rounded-full px-5  py-4 '>
      <Image source={icons.search} resizeMode='contain' className='size-5' tintColor='#ab8bff'/>
      <TextInput
           onPress={onPress}
           placeholder={placeholder}
        //    placeholder='Search'
           value=''
           onChangeText={() => {}}
           placeholderTextColor='#a8b5db'
           className='flex-1 ml-2 text-white'
      />
    </View>
  )
}
 
export default SearchBar