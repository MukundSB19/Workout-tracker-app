import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
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
        tabBarButton:HapticTab,
        tabBarBackground: TabBarBackground,

        tabBarStyle: {
          backgroundColor: "#cfe4ad",
          width: "60%",
          alignSelf: "center",
          borderRadius: 48,
          marginBottom: "7%",
        },
        tabBarIconStyle: {
          alignSelf: "center",
          margin: 8,
        },
        tabBarLabelStyle:{
          fontSize:10
        }
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
            <Octicons name="stopwatch" size={29} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
