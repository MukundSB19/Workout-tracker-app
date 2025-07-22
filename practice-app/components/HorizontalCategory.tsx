import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { CategoryImage } from '@/types/ui'

const HorizontalCategory = ({categoryList}:{categoryList:CategoryImage[]}) => {
  return (
    <View>
      <Text className='pl-6 pt-3 text-2xl font-medium tracking-tighter'>
        Select exercise type
      </Text>
      <FlatList
        data={categoryList}
        showsHorizontalScrollIndicator={false}
        horizontal
        keyExtractor={(item) => item.slug}
        renderItem={({ item }) => (
          <TouchableOpacity className="items-center mr-8 ml-4 mt-4 ">
            <Image
              className="w-[52] h-[81] bg-white rounded-full border"
              resizeMode="contain"
              source={item.imageUrl}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default HorizontalCategory