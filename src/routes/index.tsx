import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RoutesAuthenticate } from './authenticateRoutes';
import { BottomTabsRoutes } from './bottomTabsRoutes';

export function AppRoutes() {
  return (
    <NavigationContainer>
      <BottomTabsRoutes />
    </NavigationContainer>
  );
}
