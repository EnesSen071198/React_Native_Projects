import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function DesingScreen() {
  return (
    <ScrollView contentContainerStyle={styles.main}>
      <Text style={styles.header}>HEADER</Text>
      <Text style={styles.mainInfo}>MAIN INFO</Text>

      <View style={styles.infoBox}>
        <Text style={styles.info}>INFO 1</Text>
        <Text style={styles.info}>INFO 2</Text>
      </View>

      <Text style={styles.mainInfo}>MAIN INFO</Text>
      <Text style={styles.mainInfo}>MAIN INFO</Text>
      <View style={styles.infoBox}>
        <Text style={styles.info}>INFO 1</Text>
        <Text style={styles.info}>INFO 2</Text>
      </View>
      <Text style={styles.mainInfo}>MAIN INFO</Text>
      <View style={styles.infoBox}>
        <Text style={styles.info}>INFO 1</Text>
        <Text style={styles.info}>INFO 2</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Footer Content Here</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    flexGrow: 1, // İçeriğin boyutunu tam olarak kaplamasını sağla
    padding: 10, // İçeriklere biraz boşluk ekle
    backgroundColor: "#f0f0f0" // Arka plan rengini belirle
  },
  header: {
    color: "white",
    backgroundColor: "red",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    fontSize: 30,
    textAlign: "center",
    marginBottom: 10 // Dikey boşluk için ayarla
  },
  mainInfo: {
    color: "white",
    backgroundColor: "blue",
    width: "100%",
    paddingVertical: 40, // Dikey boşluk için padding ayarla
    borderRadius: 10,
    fontSize: 30,
    textAlign: "center",
    marginBottom: 15
  },
  infoBox: {
    flexDirection: "row", // Yan yana dizmek için row
    justifyContent: "space-between", // Aralarındaki boşluğu eşit dağıt
    width: "100%",
    marginBottom: 15 // Dikey boşluk için ayarla
  },
  info: {
    color: "white",
    backgroundColor: "green",
    padding: 20, // Padding'i azaltarak daha uyumlu hale getir
    borderRadius: 10,
    fontSize: 20, // Font boyutunu biraz küçült
    textAlign: "center",
    flex: 1, // Eşit alan kaplaması için flex kullan
    marginRight: 10 // Aralarındaki boşluk için
  },
  footer: {
    backgroundColor: "gray", // Footer arka plan rengi
    padding: 15,
    borderRadius: 10,
    marginTop: 20, // Üstten boşluk
    alignItems: "center",
    width: "100%"
  },
  footerText: {
    color: "white", // Footer metin rengi
    fontSize: 20
  }
});
