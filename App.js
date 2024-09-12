// A shim for TextEncoder is required for the wasm-pack module to load OK.
import "text-encoding";

// This particular shim complains when the label parameter is passed in.
import { LogBox } from "react-native";
LogBox.ignoreLogs([/TextEncoder constructor called with encoding label/]);

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as wasm from "./wasm/index.js";
// alternatively import wasm/pkg/wasm.js

export default function App() {
  wasm.greet();
  const result = wasm.add(1, 1);
  //const result = 3;
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app yow!</Text>
      <Text>The result of 1 + 2 is: {result}</Text>
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
