import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function App() {
  const [pressed, setPressed] = useState([false, false, false, false])
  function handlePress(indx) {
    let newPressed = [...pressed];
    newPressed[indx] = !newPressed[indx];
    setPressed(newPressed);
  }

  return (

    <View style={styles.container}>
      <Pressable onPressIn={() => handlePress(0)} onPressOut={() => handlePress(0)}>
        <View style={pressed[0] ? styles.menuBoxPressed : styles.menuBox}>
          <Text style={styles.menuText}>Doctors</Text>
        </View>
      </Pressable>
      <Pressable onPressIn={() => handlePress(1)} onPressOut={() => handlePress(1)}>
        <View style={pressed[1] ? styles.menuBoxPressed : styles.menuBox}>
          <Text style={styles.menuText}>Medications</Text>
        </View>
      </Pressable>
      <Pressable onPressIn={() => handlePress(2)} onPressOut={() => handlePress(2)}>
        <View style={pressed[2] ? styles.menuBoxPressed : styles.menuBox}>
          <Text style={styles.menuText}>Symptoms Diary</Text>
        </View>
      </Pressable>
      <Pressable onPressIn={() => handlePress(3)} onPressOut={() => handlePress(3)}>
        <View style={pressed[3] ? styles.menuBoxPressed : styles.menuBox}>
          <Text style={styles.menuText}>Timeline View</Text>
        </View>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#386B5F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuBox: {
    borderColor: '#F9F8F8',
    borderWidth: 4,
    borderRadius: 15,
    width: 300,
    padding: 20,
    margin: 10,
    alignItems: 'center',
  },
  menuBoxPressed: {
    backgroundColor: '#60AB9A',
    borderColor: '#F9F8F8',
    borderWidth: 4,
    borderRadius: 15,
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
