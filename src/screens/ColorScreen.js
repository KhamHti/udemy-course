import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const ColorScreen = () => {
  const randomRGB = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
  };
  return (
    <View style={styles.container}>
      <View
        style={{ width: 100, height: 100, backgroundColor: randomRGB()}}
      />
      <Button title="Add Color" />
    </View>
  );
};

export default ColorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
