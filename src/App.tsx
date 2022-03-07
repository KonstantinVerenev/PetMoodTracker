import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Platform, UIManager } from 'react-native';
import {
  gestureHandlerRootHOC,
  //GestureHandlerRootView,
} from 'react-native-gesture-handler';

import { BottomTabsNavigator } from './navigation';
import { AppProvider } from './App.provider';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export const App: React.FC = () => {
  return (
    //<GestureHandlerRootView style={{ flex: 1 }}>
    <AppProvider>
      <NavigationContainer>
        <BottomTabsNavigator />
      </NavigationContainer>
    </AppProvider>
    //</GestureHandlerRootView>
  );
};

export default gestureHandlerRootHOC(App);
