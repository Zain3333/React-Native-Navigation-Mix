import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Setting({navigation}) {
  return (
    <View style={styles.container}>
      <Text>This is Setting Page</Text>
      <Button title='Back To Home' onPress={()=>navigation.navigate('Home')} />
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
