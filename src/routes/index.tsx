import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RoutesAuthenticate } from './authenticateRoutes';

export function AppRoutes() {
  return (
    <NavigationContainer>
      <RoutesAuthenticate />
    </NavigationContainer>
  );
}
