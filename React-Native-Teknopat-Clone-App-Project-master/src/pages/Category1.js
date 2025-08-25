import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Category1 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is Category 1</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 20
  }
});

export default Category1;
