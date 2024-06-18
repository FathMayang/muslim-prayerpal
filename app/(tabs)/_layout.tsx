import { Tabs } from 'expo-router';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import {
  Bookmark,
  HandDoa,
  Lamp,
  Quran,
  Shalah,
} from '@/assets/icons/tab-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <Quran color={focused ? '#246ba4' : '#3C495E'} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarIcon: ({ focused }) => (
            <Lamp color={focused ? '#246ba4' : '#3C495E'} />
          ),
        }}
      />
      <Tabs.Screen
        name="test1"
        options={{
          tabBarIcon: ({ focused }) => (
            <Shalah color={focused ? '#246ba4' : '#3C495E'} />
          ),
        }}
      />
      <Tabs.Screen
        name="test2"
        options={{
          tabBarIcon: ({ focused }) => (
            <HandDoa color={focused ? '#246ba4' : '#3C495E'} />
          ),
        }}
      />
      <Tabs.Screen
        name="test3"
        options={{
          tabBarIcon: ({ focused }) => (
            <Bookmark color={focused ? '#246ba4' : '#3C495E'} />
          ),
        }}
      />
    </Tabs>
  );
}
