import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ImageScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ImageScreen</Text>
    </View>
  )
}

export default ImageScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})