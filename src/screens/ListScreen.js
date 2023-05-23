import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: 23 },
    { name: "Friend #2", age: 345 },
    { name: "Friend #3", age: 34 },
    { name: "Friend #234", age: 12 },
    { name: "Friend #3", age: 28 },
    { name: "Friend #5", age: 33 },
  ];

  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 20 }}>ListScreen</Text>
      <FlatList
        data={friends}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View style={{flexDirection: "row", marginLeft: 20, marginVertical: 30}}>
              <Text style={{marginRight: 10, fontSize: 18}}>{item.name}:</Text>
              <Text style={{marginLeft: 10, fontSize: 18}}>Age:{item.age}</Text>
            </View>
          );
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
  },
});
