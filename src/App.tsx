import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { BottomTabsNavigator } from './navigation';
import { AppProvider } from './App.provider';

export const App: React.FC = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <BottomTabsNavigator />
      </NavigationContainer>
    </AppProvider>
  );
};
