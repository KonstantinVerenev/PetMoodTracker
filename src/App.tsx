import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Platform, UIManager } from 'react-native';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import { BottomTabsNavigator } from './navigation';
import { AppProvider } from './App.provider';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const App: React.FC = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <BottomTabsNavigator />
      </NavigationContainer>
    </AppProvider>
  );
};

export default gestureHandlerRootHOC(App);
