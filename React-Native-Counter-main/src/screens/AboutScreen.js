import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

export default function AboutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>About Me</Text>

      <Text style={styles.description}>
        Merhaba! Ben bir Elektrik ve Elektronik Mühendisliği öğrencisiyim ve
        yazılım alanında kendimi geliştirmeye odaklandım. Özellikle React ve
        React Native ile projeler geliştiriyor, Python ve C# dillerinde deneyim
        kazanıyorum. Teknofest projelerinde yer alarak takım çalışması ve
        yazılım becerilerimi geliştirdim. Hedefim, teknoloji alanında yenilikçi
        çözümler üretmek ve topluma fayda sağlamak.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}>
        <Text style={styles.buttonText}>Go to HomeScreen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Course")}>
        <Text style={styles.buttonText}>Go to CourseScreen</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  description: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: "center",
    lineHeight: 24
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: 200,
    alignItems: "center"
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  }
});
