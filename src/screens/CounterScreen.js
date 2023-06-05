import { Button, StyleSheet, Text, View } from "react-native";
import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "plus":
      return { ...state, count: state.count + action.payload };
    case "minus":
      return { ...state, count: state.count - action.payload };
    case "reset":
      return {...state, count: state.count * action.payload};
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <View style={styles.container}>
      <Text>CounterScreen</Text>
      <Button
        title="increase"
        onPress={() => dispatch({ type: "plus", payload: 1 })}
      />
      <Button
        title="decrease"
        onPress={() => dispatch({ type: "minus", payload: 1 })}
      />
      <Button
        title="reset"
        onPress={() => dispatch({ type: "reset", payload: 0 })}
      />
      <Text>{state.count}</Text>
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
