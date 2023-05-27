import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: 23 },
    { name: "Friend #2", age: 345 },
    { name: "Friend #3", age: 34 },
    { name: "Friend #234", age: 12 },
    { name: "Friend #3", age: 12 },
    { name: "Friend #5", age: 33 },
  ];

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 18 }}>ListScreen</Text>
      <FlatList
        keyExtractor={(friend) => friend.id}
        data={friends}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return <Text style={styles.textStyle}>{item.name} - Age:{item.age}</Text>;
        }}
      />
    </View>
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textStyle: {
    marginVertical: 59,
    marginHorizontal: 20
  },
});
