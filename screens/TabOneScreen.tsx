import * as React from 'react';
import { Image, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import expo_logo from '../assets/images/expo_logo.jpg';
import { useNavigation } from '@react-navigation/native';

export default function TabOneScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={expo_logo} style={{ width: 300, height: 200 }} />
      <Text style={styles.title}>Expo for React Native Web</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
