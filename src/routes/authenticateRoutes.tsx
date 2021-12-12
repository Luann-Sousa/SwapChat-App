import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SiginInScreen } from '../screens/SiginIn';
import { LoginScreen } from '../screens/Login';
import { SignInUpScreen } from '../screens/SignInUp';

export type ScreenStackParamList = {
  Login: undefined;
  SigninScreen: undefined;
  SignInUpScreen: undefined;
};

const Stack = createStackNavigator<ScreenStackParamList>();

export function RoutesAuthenticate() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SigninScreen" component={SiginInScreen} />
      <Stack.Screen name="SignInUpScreen" component={SignInUpScreen} />
    </Stack.Navigator>
  );
}
