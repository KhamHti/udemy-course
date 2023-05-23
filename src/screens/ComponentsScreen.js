import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ComponentsScreen = () => {
  const greeting = <Text style={styles.text}>Hello My Name is :</Text>;
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 26}}>Getting started with React Native</Text>
      {greeting}
    </View>
  );
};

export default ComponentsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
  },
});
