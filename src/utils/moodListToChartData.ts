import { MoodOptionTimestamp } from '../types';

export const moodListToChartData = (moodList: MoodOptionTimestamp[]) => {
  const result: { [key: string]: number } = {};

  moodList.forEach(item => {
    if (result[item.mood.emoji]) {
      result[item.mood.emoji] += 1;
    } else {
      result[item.mood.emoji] = 1;
    }
  });

  const chartData = Object.entries(result).map(([key, value]) => ({
    x: key,
    y: value,
  }));

  return chartData;
};
