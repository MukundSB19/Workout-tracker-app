import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';


import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Octicons from "@expo/vector-icons/Octicons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tabIconSelected,
        headerShown: false,

        tabBarStyle: {
          backgroundColor: "#b7e3f0",
          width: "60%",

          borderRadius: 48,
          overflow: "hidden",
          position: "absolute",
          marginHorizontal: "20%",
          marginBottom: "3%",
        },
        tabBarIconStyle: {
          alignSelf: "center",
          margin: 8,
        },
        tabBarLabelStyle: {
          fontSize: 11,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Activity",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="run-fast" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="timer"
        options={{
          title: "Timer",
          // tabBarIconStyle : {

          // },
          tabBarIcon: ({ color }) => (
            <Octicons name="stopwatch" size={27} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
