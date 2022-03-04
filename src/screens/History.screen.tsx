import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import { MoodItemRow } from '../components/MoodItemRow';
import { useAppContext } from '../hooks/useAppContext';

export const History: React.FC = () => {
  const appContext = useAppContext();

  return (
    <ScrollView style={styles.container}>
      {appContext.moodList.map(item => (
        <MoodItemRow item={item} key={item.timestamp} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
