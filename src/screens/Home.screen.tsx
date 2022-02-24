import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { MoodPicker } from '../components/MoodPicker';
import { MoodOption, MoodOptionTimestamp } from '../types';

export const Home: React.FC = () => {
  const [moodList, setMoodList] = useState<MoodOptionTimestamp[]>([]);

  const handleSelectMood = useCallback((selectedMood: MoodOption): void => {
    console.log(selectedMood);
    setMoodList(prevState => [
      ...prevState,
      { mood: selectedMood, timestamp: Date.now() },
    ]);
  }, []);

  return (
    <View style={styles.container}>
      <MoodPicker handleSelectMood={handleSelectMood} />
      {moodList.map(item => (
        <Text key={item.timestamp}>
          {item.mood.emoji} {new Date(item.timestamp).toString()}
        </Text>
      ))}
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
