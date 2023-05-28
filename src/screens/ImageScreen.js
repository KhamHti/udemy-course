import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ImageDetails from "../components/ImageDetails";

const ImageScreen = () => {
  return (
    <View style={styles.container}>
      <ImageDetails title="Hello" img={require("../../assets/beach.jpg")} />
      <ImageDetails title="asdf" img={require("../../assets/forest.jpg")}/>
      <ImageDetails title="red" img={require("../../assets/mountain.jpg")}/>
    </View>
  );
};

export default ImageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
