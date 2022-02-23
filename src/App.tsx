import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { BottomTabsNavigator } from './navigation';

export const App: React.FC = () => {
  return (
    <NavigationContainer>
      <BottomTabsNavigator />
    </NavigationContainer>
  );
};
