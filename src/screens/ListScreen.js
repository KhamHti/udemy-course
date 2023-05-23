import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1" },
    { name: "Friend #2" },
    { name: "Friend #3" },
    { name: "Friend #234" },
    { name: "Friend #3" },
    { name: "Friend #5" },
  ];

  return (
    <View style={styles.container}>
      <Text style={{marginBottom: 20}}>ListScreen</Text>
      <FlatList
        data={friends}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <Text style={styles.textStyle}>{item.name}</Text>;
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
    marginVertical: 50
  }
});
