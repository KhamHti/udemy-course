import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ComponentsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ComponentsScreen</Text>
    </View>
  )
}

export default ComponentsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})