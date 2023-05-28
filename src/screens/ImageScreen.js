import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ImageDetails from "../components/ImageDetails";

const ImageScreen = () => {
  return (
    <View style={styles.container}>
      <ImageDetails
        title="Hello"
        img={require("../../assets/beach.jpg")}
        score={87}
      />
      <ImageDetails
        title="asdf"
        img={require("../../assets/forest.jpg")}
        score={12}
      />
      <ImageDetails
        title="red"
        img={require("../../assets/mountain.jpg")}
        score={23}
      />
    </View>
  );
};

export default ImageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
