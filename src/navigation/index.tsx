import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';

import { Home } from '../screens/Home.screen';
import { History } from '../screens/History.screen';
import { Analitics } from '../screens/Analitics.screen';
import { HomeIcon, ListIcon, StatIcon } from './NavigationIcons';
import { theme } from '../theme';

type BottomTabParamList = {
  Home: undefined;
  History: undefined;
  Analitics: undefined;
};

type Props = BottomTabScreenProps<BottomTabParamList, keyof BottomTabParamList>;

const BottomTabs = createBottomTabNavigator<BottomTabParamList>();

const screenOptions = ({ route }: Props): BottomTabNavigationOptions => ({
  tabBarActiveTintColor: theme.teal,
  tabBarInactiveTintColor: theme.darkgrey,
  tabBarShowLabel: false,
  tabBarIcon: ({ color, size }) => {
    if (route.name === 'Home') {
      return <HomeIcon color={color} size={size} />;
    }
    if (route.name === 'History') {
      return <ListIcon color={color} size={size} />;
    }
    if (route.name === 'Analitics') {
      return <StatIcon color={color} size={size} />;
    }

    return null;
  },
});

export const BottomTabsNavigator: React.FC = () => {
  return (
    <BottomTabs.Navigator screenOptions={screenOptions}>
      <BottomTabs.Screen
        name="Home"
        component={Home}
        options={{ title: 'Mood options' }}
      />
      <BottomTabs.Screen name="History" component={History} />
      <BottomTabs.Screen name="Analitics" component={Analitics} />
    </BottomTabs.Navigator>
  );
};
