import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View style={styles.container}>
      <Text>CounterScreen</Text>
      <Button title="increase" onPress={() => setCounter(counter + 1)} />
      <Button title="decrease" onPress={() => setCounter(counter - 1)} />
      <Button title="reset" onPress={() => setCounter(0)} />
      <Text>{counter}</Text>
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
