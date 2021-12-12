/* eslint-disable no-nested-ternary */
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import FriendsSVG from '../assets/icon/friends.svg';
import { MatchScreen } from '../screens/Match';
import { FriendsScreen } from '../screens/Friends';

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
        component={MatchScreen}
        options={{
          tabBarIcon: ({ size, color }) => <MaterialIcons name="home" size={size} color={color} />,
        }}
      />
      <BottomTabs.Screen
        name="Friends"
        component={FriendsScreen}
        options={{
          tabBarIcon: () => <FriendsSVG width={24} height={24} />,
        }}
      />
    </BottomTabs.Navigator>
  );
}
