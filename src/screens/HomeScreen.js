import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Home Screen</Text>
      <Button title="Go To List" onPress={() => navigation.navigate("List")} />
      <TouchableOpacity
        style={styles.component}
        onPress={() => navigation.navigate("Component")}
      >
        <Text>Go To Component</Text>
      </TouchableOpacity>
      <Button
        title="Go To Image Screen"
        onPress={() => navigation.navigate("Image")}
      />
      <TouchableOpacity
        style={styles.component}
        onPress={() => navigation.navigate("Counter")}
      >
        <Text>Go To Counter</Text>
      </TouchableOpacity>
      <Button
        title="Go To Color Screen"
        onPress={() => navigation.navigate("Color")}
      />
      <Button
        title="Go To Square Screen"
        onPress={() => navigation.navigate("Square")}
      />
      <Button
        style={styles.mt}
        title="Go To Greeting Screen"
        onPress={() => navigation.navigate("Greeting")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  component: {
    marginTop: 30,
  },
  mt: {
    marginTop: 30,
  },
});

export default HomeScreen;
