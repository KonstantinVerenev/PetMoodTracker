import React, { useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  LayoutAnimation,
} from 'react-native';
import format from 'date-fns/format';
import Reanimated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

import { theme } from '../theme';
import { MoodOptionTimestamp } from '../types';
import { useAppContext } from '../hooks/useAppContext';

type MoodItemRowProps = {
  item: MoodOptionTimestamp;
};

export const MoodItemRow: React.FC<MoodItemRowProps> = ({ item }) => {
  const appContext = useAppContext();
  const translateX = useSharedValue(0);

  const handleDelete = useCallback(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    appContext.handleDeleteMood(item);
  }, [appContext, item]);

  const deleteWithDelay = useCallback(() => {
    setTimeout(() => {
      handleDelete();
    }, 300);
  }, [handleDelete]);

  const panGesture = Gesture.Pan()
    .activeOffsetX([-2, 2])
    .activeOffsetY([-100, 100])
    .onUpdate(event => (translateX.value = event.translationX))
    .onEnd(event => {
      if (Math.abs(event.translationX) > 120) {
        translateX.value = withTiming(1000 * Math.sign(event.translationX));
        runOnJS(deleteWithDelay)();
      } else {
        translateX.value = withTiming(0);
      }
    });

  const cardGestureStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
    ],
  }));

  return (
    <GestureDetector gesture={panGesture}>
      <Reanimated.View style={[styles.moodItem, cardGestureStyle]}>
        <View style={styles.iconAndDescription}>
          <Text style={styles.moodValue}>{item.mood.emoji}</Text>
          <Text style={styles.moodDescription}>{item.mood.description}</Text>
        </View>
        <Text style={styles.moodDate}>
          {format(new Date(item.timestamp), 'dd MMM, yyyy - HH:mm')}
        </Text>
        <Pressable onPress={handleDelete}>
          <Text style={styles.deleteText}>Delete</Text>
        </Pressable>
      </Reanimated.View>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  moodValue: {
    textAlign: 'center',
    fontSize: 40,
    marginRight: 10,
  },
  moodDate: {
    textAlign: 'center',
    color: theme.teal,
    fontFamily: theme.fontFamilyRegular,
  },
  moodItem: {
    backgroundColor: 'white',
    marginBottom: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  moodDescription: {
    fontSize: 18,
    color: theme.teal,
    fontFamily: theme.fontFamilyBold,
  },
  iconAndDescription: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deleteText: {
    color: theme.red,
    fontFamily: theme.fontFamilyBold,
  },
});
