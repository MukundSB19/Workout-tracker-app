import "@/global.css";
import { Image } from "expo-image";
import { ImageBackground, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-bgColor flex-1 ">
      <ScrollView className="">
        <View className="">
          <View>
            <ImageBackground>
              
            </ImageBackground>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
