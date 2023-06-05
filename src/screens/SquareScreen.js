import { StyleSheet, Text, View } from "react-native";
import React, { useReducer } from "react";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  switch (action.colorChange) {
    case "red":
      if (state + action.amount > 255 || state + action.amount < 0) {
        return state;
      }
      return { ...state, red: state.red + action.amount };
    case "green":
      if (state + action.amount > 255 || state + action.amount < 0) {
        return state;
      }
      return { ...state, green: state.green + action.amount };
    case "blue":
      if (state + action.amount > 255 || state + action.amount < 0) {
        return state;
      }
      return { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  return (
    <View style={styles.container}>
      <ColorCounter
        color="Red"
        onIncrease={() =>
          dispatch({ colorChange: "red", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorChange: "red", amount: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="Green"
        onIncrease={() =>
          dispatch({ colorChange: "green", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorChange: "green", amount: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorChange: "blue", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorChange: "blue", amount: -1 * COLOR_INCREMENT })
        }
        color="Blue"
      />
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: `rgb(${state.red},${state.green},${state.blue})`,
          alignSelf: "center",
        }}
      />
    </View>
  );
};

export default SquareScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
