import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ImageDetails from "../components/ImageDetails";

const ImageScreen = () => {
  return (
    <View style={styles.container}>
      <ImageDetails title="Hello"/>
      <ImageDetails title="asdf" />
      <ImageDetails title="red" />
    </View>
  );
};

export default ImageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
