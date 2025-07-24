import { View, Text, FlatList, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { MuscleCategoryImage } from '@/types/ui'
import { images } from '@/constants';

const MuscleCategory = ({muscleList}:{muscleList:MuscleCategoryImage[]}) => {
const [activeMuscle,setActiveMuscle] = useState<string | null>(null);


  return (
    <View className="bg-white m-4 rounded-3xl  mt-9">
      <Text className="pl-5 pt-4 text-2xl font-bold tracking-tighter">
        Muscles workload
      </Text>
      <Text className="pl-5 pt-1 tracking-tighter mb-5">
        Select Muscle types you want to make strong
      </Text>
      <View className="">
        <FlatList
          data={muscleList}
          numColumns={2}
          keyExtractor={(item) => item.slug}
          renderItem={({ item }) => {
            const isActive = activeMuscle === item.slug;
            return (
              <TouchableOpacity
                className={`w-[44%] items-center justify-center rounded-2xl border  p-5 pr-2 m-3 bg-white shadow-sm ${
                  isActive ? "border-blue-500" : "border-gray-200"
                }`}
                onPress={() => setActiveMuscle(item.slug)}
                activeOpacity={0.8}
              >
                <Image
                  source={item.imageUrl}
                  className="w-[150] h-[210] ml-5 mr-7 mb-3 bg-bgColor rounded-2xl "
                  resizeMode="cover"
                />
                <Text className="text-center mb-3 font-semibold tracking-tighter text-xl">
                  {item.title}
                </Text>
              </TouchableOpacity>
            );}}
        />
      </View>
    </View>
  );
}

export default MuscleCategory