import React from 'react';
import { StyleSheet, View } from 'react-native';
import { VictoryPie } from 'victory-native';

import { useAppContext } from '../hooks/useAppContext';
import { moodListToChartData } from '../utils/moodListToChartData';

export const Analitics: React.FC = () => {
  const moodList = useAppContext().moodList;

  const chartData = moodListToChartData(moodList);

  return (
    <View style={styles.container}>
      <VictoryPie
        labelRadius={80}
        radius={150}
        innerRadius={50}
        colorScale={['tomato', 'orange', 'gold', 'teal', 'navy']}
        style={{ labels: { fontSize: 30 } }}
        data={chartData}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
