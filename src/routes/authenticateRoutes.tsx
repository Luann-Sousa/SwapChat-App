import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SiginInScreen } from '../screens/SiginIn';

const Stack = createStackNavigator();

export function RoutesAuthenticate() {
  return (
    <Stack.Navigator
      initialRouteName="Signin"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Signin" component={SiginInScreen} />
    </Stack.Navigator>
  );
}
