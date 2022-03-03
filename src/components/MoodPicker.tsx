import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet, Pressable, Alert, Image } from 'react-native';

import { theme } from '../theme';
import { MoodOption } from '../types';

const moodOptions: MoodOption[] = [
  { emoji: '🧑‍💻', description: 'studious' },
  { emoji: '🤔', description: 'pensive' },
  { emoji: '😊', description: 'happy' },
  { emoji: '🥳', description: 'celebratory' },
  { emoji: '😤', description: 'frustrated' },
];

type MoodPickerProps = {
  handleSelectMood: (mood: MoodOption) => void;
};

export const MoodPicker: React.FC<MoodPickerProps> = ({ handleSelectMood }) => {
  const [selectedMood, setSelectedMood] = useState<MoodOption>();
  const [hasSelected, setHasSelected] = useState<boolean>(false);

  const handleButton = useCallback(() => {
    if (selectedMood) {
      handleSelectMood(selectedMood);
      setSelectedMood(undefined);
      setHasSelected(true);
    } else {
      Alert.alert('Choose some mood');
    }
  }, [handleSelectMood, selectedMood]);

  const options = moodOptions.map(option => {
    const { description, emoji } = option;

    return (
      <View key={description} style={styles.wrapper}>
        <Pressable
          onPress={() => {
            setSelectedMood(option);
          }}
          style={[
            styles.mood,
            selectedMood?.emoji === option.emoji && styles.selectedMood,
          ]}>
          <Text style={styles.emoji}>{emoji}</Text>
        </Pressable>
        <Text style={styles.description} numberOfLines={1}>
          {selectedMood?.emoji === option.emoji && description}
        </Text>
      </View>
    );
  });

  if (hasSelected) {
    return (
      <View style={styles.container}>
        <Image
          style={styles.doneImage}
          source={require('../../assets/butterflies.png')}
        />
        <Pressable style={styles.button} onPress={() => setHasSelected(false)}>
          <Text style={styles.buttonText}>Choose another!</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>How are you right now?</Text>
      <View style={styles.options}>{options}</View>
      <Pressable style={styles.button} onPress={handleButton}>
        <Text style={styles.buttonText}>Choose</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 260,
    borderWidth: 2,
    borderColor: theme.darkgrey,
    paddingVertical: 30,
    paddingHorizontal: 10,
    borderRadius: 10,
    justifyContent: 'flex-end',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  wrapper: {
    alignItems: 'center',
  },
  emoji: {
    fontSize: 32,
  },
  mood: {
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedMood: {
    backgroundColor: theme.teal,
    borderWidth: 2,
    borderColor: theme.darkgrey,
  },
  description: {
    width: 95,
    position: 'absolute',
    bottom: -20,
    textAlign: 'center',
    fontSize: 16,
  },
  button: {
    backgroundColor: theme.teal,
    width: 150,
    borderRadius: 20,
    marginTop: 20,
    alignSelf: 'center',
    padding: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  doneImage: {
    alignSelf: 'center',
  },
});
