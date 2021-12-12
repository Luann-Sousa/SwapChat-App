/* eslint-disable no-nested-ternary */
import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import FriendsSVG from '../assets/icon/friends.svg';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const BottomTabs = createBottomTabNavigator();

export function BottomTabsRoutes() {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <BottomTabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ size, color }) => <MaterialIcons name="home" size={size} color={color} />,
        }}
      />
      <BottomTabs.Screen
        name="Friends"
        component={SettingsScreen}
        options={{
          tabBarIcon: () => <FriendsSVG width={24} height={24} />,
        }}
      />
    </BottomTabs.Navigator>
  );
}
