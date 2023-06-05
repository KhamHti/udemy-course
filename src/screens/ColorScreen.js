import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const ColorScreen = () => {
  const [color, setColor] = useState([]);

  const randomRGB = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
  };
  return (
    <View style={styles.container}>
      <Button
        title="Add Color"
        onPress={() => {
          setColor([...color, randomRGB()]);
          console.log(color);
        }}
      />
      <FlatList
        keyExtractor={item => item}
        data={color}
        renderItem={({ item }) => {
          return (
            <View
              style={{ width: 100, height: 100, backgroundColor: item }}
            />
          );
        }}
      />
    </View>
  );
};

export default ColorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
