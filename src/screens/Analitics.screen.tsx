import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Analitics: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Analitics screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
