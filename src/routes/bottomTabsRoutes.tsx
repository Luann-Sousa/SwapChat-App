/* eslint-disable no-nested-ternary */
import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
      <BottomTabs.Screen name="Home" component={HomeScreen} />
      <BottomTabs.Screen name="Settings" component={SettingsScreen} />
    </BottomTabs.Navigator>
  );
}
