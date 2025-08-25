import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity
} from "react-native";
import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("Home");
      }
    });

    return unsubscribe; // Aboneliği temizle
  }, []);

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Kullanıcı oluşturuldu:", user.email);
      })
      .catch((error) => alert(error.message));
  };

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Kullanıcı giriş yaptı:", user.email);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='Email'
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry // Şifre gizlendi
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.outlineButton]}>
          <Text style={[styles.buttonText, styles.outlineButtonText]}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5", // Arka plan rengi
    padding: 20
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20
  },
  input: {
    backgroundColor: "#ffffff",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 5,
    borderRadius: 10,
    elevation: 2, // Gölge efekti
    shadowColor: "#000", // Gölge rengi
    shadowOffset: { width: 0, height: 2 }, // Gölge konumu
    shadowOpacity: 0.3, // Gölge yoğunluğu
    shadowRadius: 5 // Gölge yayılması
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center" // Butonları ortala
  },
  button: {
    backgroundColor: "#007bff", // Ana buton rengi
    paddingVertical: 15,
    width: "100%",
    borderRadius: 10,
    alignItems: "center",
    elevation: 3 // Buton gölgesi
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold"
  },
  outlineButton: {
    backgroundColor: "#ffffff", // Outline buton rengi
    borderColor: "#007bff", // Kenar rengi
    borderWidth: 2,
    marginTop: 10
  },
  outlineButtonText: {
    color: "#007bff" // Outline buton metin rengi
  }
});
