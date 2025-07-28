import { View, Text } from "react-native";
import { Button, Image, TouchableOpacity } from "react-native";
import { ImageBackground, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Entypo from "@expo/vector-icons/Entypo";


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
            <Text className="text-xl font-medium">Daily Activity</Text>
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
          <Text className="text-2xl font-medium tracking-tighter ml-6 mt-3">
            24 July, 2025
          </Text>
          <View className="flex-row flex justify-between mx-6 mt-7 mb-2 items-center">
            <TouchableOpacity className="flex-row bg-[#d2e7b2] items-center gap-2 p-4 rounded-[30px]">
              <AntDesign name="staro" size={24} color="black" />
              <Text className="">35m 42s</Text>
            </TouchableOpacity>
            <Text className="color-slate-600">Average Time</Text>
          </View>
          <View className="h-[2px] w-[85%] bg-gray-300  my-2 self-center rounded-full" />
          <View className="flex-row flex justify-between mx-6 mt-5 mb-2 items-center">
            <TouchableOpacity className="flex-row bg-[#b9e3ed] items-center gap-2 p-4 rounded-[30px]">
              <FontAwesome5 name="clock" size={24} color="black" />
              <Text className="">25m 12s</Text>
            </TouchableOpacity>
            <Text className="color-slate-600">Today's Time</Text>
          </View>
          <View className="h-[2px] w-[85%] bg-gray-300  my-2 self-center rounded-full" />
          <View className="flex-row flex justify-between mx-6 mt-5 mb-2 items-center">
            <TouchableOpacity className="flex-row bg-[#e8a68c] items-center gap-2 p-4 rounded-[30px]">
              <FontAwesome6 name="medal" size={24} color="black" />
              <Text className="">10 Points</Text>
            </TouchableOpacity>
            <Text className="color-slate-600">Points Earned</Text>
          </View>
         

          <View className="bg-white m-4 rounded-3xl">
            <View className="flex flex-row items-center mt-3 ml-2">
              <Entypo name="dot-single" size={34} color="#479db3" />
              <Text className="text-xl font-medium tracking-tighter">
                Level Activity
              </Text>
            </View>
            <Text className="tracking-tighter ml-4">
              Your general goal achievements
            </Text>
            <View className="flex flex-row items-center   justify-between mx-5">
              <Text className="text-5xl font-medium tracking-tighter">65%</Text>
              <View className="items-center justify-center">
                <AnimatedCircularProgress
                  size={130} // size of the circle
                  width={14} // thickness
                  fill={65} // percentage
                  tintColor="#479db3"
                  backgroundColor="#e0e0e0"
                  rotation={-90} // to make it semi-circular
                  arcSweepAngle={180} // sweep only half circle
                  lineCap="square"
                >
                  {(fill: number) => (

                    <Text className="text-base mt-[-20]">
                      {Math.round(fill)}%
                    </Text>
                  )}
                </AnimatedCircularProgress>
              </View>
            </View>
           
            <View className="flex flex-row items-center mt-3 ml-2">
              <Entypo name="dot-single" size={34} color="#ea5752" />
              <Text className="text-xl font-medium tracking-tighter">
                Success endurance
              </Text>
            </View>
            <Text className="tracking-tighter ml-4">
              Your general endurance achievement
            </Text>
            <View className="flex flex-row items-center   justify-between mx-5">
              <Text className="text-5xl font-medium tracking-tighter">85%</Text>
              <View className="items-center justify-center">
                <AnimatedCircularProgress
                  size={130} // size of the circle
                  width={14} // thickness
                  fill={85} // percentage
                  tintColor="#ea5752"
                  backgroundColor="#e0e0e0"
                  rotation={-90} // to make it semi-circular
                  arcSweepAngle={180} // sweep only half circle
                  lineCap="square"
                >
                  {(fill: number) => (
                    <Text className="text-base mt-[-20]">
                      {Math.round(fill)}%
                    </Text>
                  )}
                </AnimatedCircularProgress>
              </View>
            </View>
            <View className="flex flex-row items-center mt-3 ml-2">
              <Entypo name="dot-single" size={34} color="#bce67e" />
              <Text className="text-xl font-medium tracking-tighter">
                Level Activity
              </Text>
            </View>
            <Text className="tracking-tighter ml-4">
              Your general goal achievements
            </Text>
            <View className="flex flex-row items-center   justify-between mx-5">
              <Text className="text-5xl font-medium tracking-tighter">45%</Text>
              <View className="items-center justify-center">
                <AnimatedCircularProgress
                  size={130} // size of the circle
                  width={14} // thickness
                  fill={45} // percentage
                  tintColor="#bce67e"
                  backgroundColor="#e0e0e0"
                  rotation={-90} // to make it semi-circular
                  arcSweepAngle={180} // sweep only half circle
                  lineCap="square"
                >
                  {(fill: number) => (
                    <Text className="text-base mt-[-20]">
                      {Math.round(fill)}%
                    </Text>
                  )}
                </AnimatedCircularProgress>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default explore;
