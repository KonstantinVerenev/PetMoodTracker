import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const History: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>History screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
