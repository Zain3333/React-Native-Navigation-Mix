import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

export default function About({navigation}) {
  return (
    <View style={styles.container}>
      <Text>About</Text>
      <Button onPress={() => navigation.navigate('Contact')} title='Go to Contact'></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
