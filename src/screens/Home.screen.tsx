import React from 'react';
import { View, StyleSheet } from 'react-native';

import { useAppContext } from '../hooks/useAppContext';
import { MoodPicker } from '../components/MoodPicker';

export const Home: React.FC = () => {
  const appContext = useAppContext();

  return (
    <View style={styles.container}>
      <MoodPicker handleSelectMood={appContext.handleSelectMood} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
});
