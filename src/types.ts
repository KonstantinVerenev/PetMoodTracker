export type MoodOption = {
  emoji: string;
  description: string;
};

export type MoodOptionTimestamp = {
  mood: MoodOption;
  timestamp: number;
};
