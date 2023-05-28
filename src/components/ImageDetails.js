import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ImageDetails = ({ title, img }) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Image source={img} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 100,
    height: 100,
  },
});

export default ImageDetails;
