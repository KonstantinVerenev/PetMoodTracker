import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MoodItemRow } from '../components/MoodItemRow';

import { useAppContext } from '../hooks/useAppContext';

export const History: React.FC = () => {
  const appContext = useAppContext();

  return (
    <View style={styles.container}>
      {appContext.moodList.map(item => (
        <MoodItemRow item={item} key={item.timestamp} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
