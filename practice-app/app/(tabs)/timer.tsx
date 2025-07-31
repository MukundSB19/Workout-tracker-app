import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { images } from "@/constants";
import Ionicons from "@expo/vector-icons/Ionicons";

const timer = () => {
  const screenWidth = Dimensions.get("window").width;
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="m-safe ">
          <View className="flex flex-row justify-between items-center m-4">
            <AntDesign
              name="arrowleft"
              size={24}
              color="black"
              className="bg-white rounded-full border p-5"
            />
            <Text className="text-xl font-medium">Daily Activity</Text>
            <Entypo
              name="dots-three-horizontal"
              size={24}
              color="black"
              className="bg-white rounded-full border p-5"
            />
          </View>
          <View className="flex flex-row items-center">
            <FontAwesome5
              name="running"
              size={22}
              color="#e8a68c"
              className="bg-black border border-8 border-[#e8a68c]  rounded-full p-5 ml-7"
            />
            <View className="ml-8 mt-8">
              <Text className="text-4xl font-medium tracking-tighter">
                10 Km
              </Text>
              <Text className="text-5xl tracking-tighter">Marathon</Text>
            </View>
          </View>
          <View className="mt-9 items-center">
            <LineChart
              data={{
                labels: ["2km", "4km", "6km", "8km", "10km"],
                datasets: [
                  {
                    data: [320, 654, 550, 900, 1233],
                    color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
                  },
                ],
              }}
              width={screenWidth - 32}
              height={220}
              chartConfig={{
                backgroundGradientFrom: "#efefef",
                backgroundGradientTo: "#efefef",
                decimalPlaces: 0,
                color: (opacity = 100) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: () => "#999",
                propsForDots: {
                  r: "5",
                  strokeWidth: "2",
                  stroke: "#fff",
                },
              }}
              bezier
            />
          </View>
          <View>
            <View className="items-center mt-6">
              <Image
                source={images.Display2}
                className="w-[82%] rounded-3xl"
              ></Image>
              <View className="absolute overflow-hidden left-16 flex flex-row m-2 items-center mt-6 ">
                <Ionicons name="footsteps" size={25} color="green" />
                <Text className="text-xl pl-2 ">Steps</Text>
              </View>
              <Text
                className="absolute overflow-hidden left-20
                top-14 text-2xl"
              >
                10,114
              </Text>
              <View className="h-[2px] w-[15%] bg-gray-700  my-1 rounded-full absolute overflow-hidden top-24 left-20" />
              <View className="absolute overflow-hidden left-16 flex flex-row m-2 items-center mt-32 ">
                <AntDesign name="heart" size={24} color="red" />
                <Text className="text-xl pl-2 ">HR</Text>
              </View>
              <Text
                className="absolute overflow-hidden left-20
                top-40 text-2xl"
              >
                95
              </Text>
              <View className="h-[2px] w-[15%] bg-gray-700  my-1 rounded-full absolute overflow-hidden top-52 left-20" />
              <View className="absolute overflow-hidden left-16 flex flex-row m-2 items-center bottom-20 mt-3 ">
                <Entypo name="stopwatch" size={24} color="blue" />
                <Text className="text-xl pl-2 ">Time</Text>
              </View>
              <Text
                className="absolute overflow-hidden left-20
                bottom-10 text-2xl pt-7"
              >
                00:54
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default timer;
