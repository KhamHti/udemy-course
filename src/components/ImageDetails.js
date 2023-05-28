import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ImageDetails = ({ title, img, score }) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Image source={img} />
      <Text>Image Score -{score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ImageDetails;
