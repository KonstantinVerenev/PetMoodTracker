import React, { createContext, useCallback, useState } from 'react';
import { MoodOption, MoodOptionTimestamp } from './types';

type AppContext = {
  moodList: MoodOptionTimestamp[];
  handleSelectMood: (selectedMood: MoodOption) => void;
};

export const appContext = createContext<AppContext>({
  moodList: [],
  handleSelectMood: () => {
    null;
  },
});

export const AppProvider: React.FC = ({ children }) => {
  const [moodList, setMoodList] = useState<MoodOptionTimestamp[]>([]);

  const handleSelectMood = useCallback((selectedMood: MoodOption): void => {
    setMoodList(prevState => [
      ...prevState,
      { mood: selectedMood, timestamp: Date.now() },
    ]);
  }, []);

  return (
    <appContext.Provider value={{ moodList, handleSelectMood }}>
      {children}
    </appContext.Provider>
  );
};
