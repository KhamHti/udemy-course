import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CounterScreen = () => {
  return (
    <View style={styles.container}>
      <Text>CounterScreen</Text>
    </View>
  )
}

export default CounterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})