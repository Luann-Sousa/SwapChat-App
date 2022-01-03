import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { FriendsScreen } from '../screens/Friends';
import { LoginScreen } from '../screens/Login';
import { MatchScreen } from '../screens/Match';
import { Messege } from '../screens/Messege';
import { BottomTabsRoutes } from './bottomTabsRoutes';

export type ScreenStackParamList = {
  MatchScreen: undefined;
  SigninScreen: undefined;
  SignInUpScreen: undefined;
  Messege: undefined;
  HomeAuth: undefined;
};

const Stack = createStackNavigator<ScreenStackParamList>();

export function RoutesAuthenticate() {
  return (
    <Stack.Navigator
      initialRouteName="MatchScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="MatchScreen" component={MatchScreen} />
      <Stack.Screen name="Messege" component={Messege} />
    </Stack.Navigator>
  );
}
