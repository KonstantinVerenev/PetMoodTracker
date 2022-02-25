import React, { createContext, useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { MoodOption, MoodOptionTimestamp } from './types';

type AppData = {
  moodList: MoodOptionTimestamp[];
};

const DATA_KEY = 'APP_DATA';

const setAppData = async (moodList: MoodOptionTimestamp[]): Promise<void> => {
  try {
    await AsyncStorage.setItem(
      DATA_KEY,
      JSON.stringify({ moodList: moodList }),
    );
  } catch (error) {
    console.log(error);
  }
};

const getAppData = async (): Promise<AppData | null> => {
  try {
    const result = await AsyncStorage.getItem(DATA_KEY);
    if (result) {
      return JSON.parse(result);
    }
  } catch (error) {
    console.log(error);
  }
  return null;
};

type AppContext = {
  moodList: MoodOptionTimestamp[];
  handleSelectMood: (selectedMood: MoodOption) => void;
};

export const AppContext = createContext<AppContext>({
  moodList: [],
  handleSelectMood: () => {
    null;
  },
});

export const AppProvider: React.FC = ({ children }) => {
  const [moodList, setMoodList] = useState<MoodOptionTimestamp[]>([]);

  useEffect(() => {
    const fetchAppData = async () => {
      const data = await getAppData();
      if (data) {
        setMoodList(data.moodList);
      }
    };

    fetchAppData();
  }, []);

  const handleSelectMood = useCallback((selectedMood: MoodOption): void => {
    setMoodList(prevState => {
      const newMoodList = [
        ...prevState,
        { mood: selectedMood, timestamp: Date.now() },
      ];

      setAppData(newMoodList);

      return newMoodList;
    });
  }, []);

  return (
    <AppContext.Provider value={{ moodList, handleSelectMood }}>
      {children}
    </AppContext.Provider>
  );
};
