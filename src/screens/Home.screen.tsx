import React, { useEffect } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';

import { useAppContext } from '../hooks/useAppContext';
import { MoodPicker } from '../components/MoodPicker';
import SplashScreen from 'react-native-splash-screen';

const backgroundImageUrl =
  'https://images.unsplash.com/photo-1474540412665-1cdae210ae6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1766&q=80';

export const Home: React.FC = () => {
  const appContext = useAppContext();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ImageBackground
      style={styles.container}
      source={{ uri: backgroundImageUrl }}>
      <MoodPicker handleSelectMood={appContext.handleSelectMood} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
