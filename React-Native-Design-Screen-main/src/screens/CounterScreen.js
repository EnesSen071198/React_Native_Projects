import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function CounterScreen() {
  const [counter, setCounter] = useState(0); // useState hook'u burada tanımlandı

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Counter Screen</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setCounter(counter + 1)} // Arttır butonu işlevi
      >
        <Text style={styles.buttonText}>Arttır</Text>
      </TouchableOpacity>
      <Text style={styles.descText}>{counter}</Text>
      {/* Sayaç değeri burada gösteriliyor */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => setCounter(counter - 1)} // Azalt butonu işlevi
      >
        <Text style={styles.buttonText}>Azalt</Text>
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
  descText: {
    fontSize: 48, // Sayacın görünürlüğünü artırmak için büyük font
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
