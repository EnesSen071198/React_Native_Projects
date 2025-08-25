import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { auth } from "../../firebase";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();

  const handleSignOut = () => {
    console.log("Çıkış yapma ve Home'a yönlendirme işlemi başlatıldı.");
    auth
      .signOut()
      .then(() => {
        navigation.navigate("Login");
      })
      .catch((error) => {
        Alert.alert("Çıkış Yapılamadı", error.message); // Hata mesajını göster
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.emailText}>
        Logged in as: {auth.currentUser?.email}
      </Text>
      <TouchableOpacity onPress={handleSignOut} style={styles.button}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5" // Arka plan rengi
  },
  emailText: {
    fontSize: 18,
    marginBottom: 20
  },
  button: {
    backgroundColor: "#ff4d4d", // Çıkış butonu için kırmızı arka plan
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    elevation: 3 // Buton gölgesi
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold"
  }
});
