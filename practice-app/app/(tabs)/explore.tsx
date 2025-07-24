import { View, Text } from "react-native";
import { Button, Image, TouchableOpacity } from "react-native";
import { ImageBackground, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";

const explore = () => {
  return (
    <SafeAreaView className="bg-bgColor flex-1 ">
      <ScrollView className="" showsVerticalScrollIndicator={false}>
        <View className="">
          <View className="flex flex-row justify-between items-center m-4">
            <AntDesign
              name="arrowleft"
              size={24}
              color="black"
              className="bg-white rounded-full border p-5"
            />
            <Text className="text-xl font-medium">Daily Challenges</Text>
            <Feather
              name="edit"
              size={24}
              color="black"
              className="bg-white rounded-full border p-5"
            />
          </View>
          <Text className="text-5xl font-medium tracking-tighter ml-6 mt-3">
            Today's Activity
          </Text>
          <Text className="text-2xl font-medium tracking-tighter ml-6 mt-2">
            24 July, 2025
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default explore;
