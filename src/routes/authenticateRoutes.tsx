import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SiginInScreen } from '../screens/SiginIn';
import { LoginScreen } from '../screens/Login';

const Stack = createStackNavigator();

export function RoutesAuthenticate() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signin" component={SiginInScreen} />
    </Stack.Navigator>
  );
}
