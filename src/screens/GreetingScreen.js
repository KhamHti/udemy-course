import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const GreetingScreen = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Text>GreetingScreen</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      />
      <Text>Hello World! My name is {name}</Text>
      <View style={{ marginTop: 20 }}>
        <Text>Enter password</Text>
        <TextInput
          placeholder="Password"
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="visible-password"
          value={password}
          onChangeText={(value) => setPassword(value)}
        />
        {password.length < 4 ? (
          <Text>Password must be longer than 4</Text>
        ) : (
          <Text>Password is {password}</Text>
        )}
      </View>
    </View>
  );
};

export default GreetingScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: "center",
  },
  input: {
    margin: 30,
    borderColor: "#000",
    borderWidth: 1,
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 10,
  },
});
