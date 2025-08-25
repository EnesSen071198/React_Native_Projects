import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>HomeScreen</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("About")}>
        <Text style={styles.buttonText}>Go to AboutScreen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Course")}>
        <Text style={styles.buttonText}>Go to CourseScreen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Info")}>
        <Text style={styles.buttonText}>Go to Information</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Counter")}>
        <Text style={styles.buttonText}>Go to CounterScreen</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center"
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: 250,
    alignItems: "center"
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  }
});
