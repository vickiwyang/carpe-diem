import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.menuBox}>
        <Text style={styles.menuText}>Doctors</Text>
      </View>
      <View style={styles.menuBox}>
        <Text style={styles.menuText}>Medications</Text>
      </View>
      <View style={styles.menuBox}>
        <Text style={styles.menuText}>Symptoms Diary</Text>
      </View>
      <View style={styles.menuBox}>
        <Text style={styles.menuText}>Timeline View</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#60AB9A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuBox: {
    borderColor: '#F9F8F8',
    borderWidth: 4,
    width: 300,
    padding: 20,
    margin: 10,
    alignItems: 'center',
  },
  menuText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#F9F8F8',
    fontFamily: 'Avenir'
  }
});
