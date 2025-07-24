import { images } from "@/constants";
import "@/global.css";

import { Button, Image, TouchableOpacity } from "react-native";
import { ImageBackground, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import HorizontalCategory from "@/components/HorizontalCategory";
import { category } from "@/data/exerciseCategory";
import MuscleCategory from "@/components/MuscleCategory";
import { categoryTwo } from "@/data/muscleCategory";

export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-bgColor flex-1 ">
      <ScrollView className="" showsVerticalScrollIndicator={false}>
        <View className="">
          <View className="flex flex-row items-center justify-between m-4">
            <View className=" flex flex-row items-center gap-4">
              <Image
                source={images.ProfilePicture}
                className=" w-[70] h-[70] rounded-full border"
              />
              <Text className="text-3xl tracking-tighter">Hello, Andrew</Text>
            </View>
            <Ionicons
              name="notifications-outline"
              size={29}
              color="black"
              className="bg-white p-4 rounded-full border"
            />
          </View>
          <Image
            source={images.Display1}
            className="rounded-[34px] m-4 border"
          />
          <View className="">
            <TouchableOpacity className="absolute overflow-hidden bottom-11 left-12 flex flex-row items-center border p-2 rounded-xl">
              <Text>Get Started</Text>
              <Entypo name="controller-play" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View>
            <HorizontalCategory categoryList={category} />
            <MuscleCategory muscleList={categoryTwo} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>

  
   
  );
}
