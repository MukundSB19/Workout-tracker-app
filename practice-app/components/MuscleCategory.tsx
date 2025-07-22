import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { MuscleCategoryImage } from '@/types/ui'
import { images } from '@/constants';

const MuscleCategory = ({muscleList}:{muscleList:MuscleCategoryImage[]}) => {
  return (
    <View className="bg-white m-4 rounded-3xl ">
      <Text className='pl-5 pt-4 text-2xl font-bold tracking-tighter'>Muscles workload</Text>
      <Text className='pl-5 pt-1 tracking-tighter'>Select Muscle types you want to make strong</Text>
      <View className="">
        <FlatList
          data={muscleList}
          numColumns={2}
          
          keyExtractor={(item) => item.slug}
          renderItem={({ item }) => (
            <TouchableOpacity className="">
              <View className='flex '>
                <Image source={item.imageUrl} className="w-[20] h-[20] " />
                <Text>{item.title}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

export default MuscleCategory