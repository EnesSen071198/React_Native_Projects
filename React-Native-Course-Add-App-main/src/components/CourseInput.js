import {
  StyleSheet,
  Text,
  View,
  Modal,
  Alert,
  Image,
  TextInput,
  Button
} from "react-native";
import React, { useState } from "react";

export default function CourseInput({ visible, onAddCourse, onCancel }) {
  const [enteredCourseText, setEnteredCourseText] = useState("");
  const addCourseHandler = () => {
    onAddCourse(enteredCourseText);
    setEnteredCourseText("");
  };
  const courseInputHandler = (enteredText) => {
    setEnteredCourseText(enteredText);
  };
  return (
    <Modal animationType='slide' visible={visible}>
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../../assets/1.jpg")} />
        <TextInput
          style={styles.textInput}
          placeholder='Add New Task'
          value={enteredCourseText}
          onChangeText={courseInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button onPress={onCancel} title='Decline' color='red' />
          </View>
          <View style={styles.button}>
            <Button onPress={addCourseHandler} title='Add' color='blue' />
          </View>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#424242", // Daha koyu arka plan
    padding: 20
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75, // Tam daire olması için
    marginBottom: 20, // Resim ile input arasında boşluk
    borderColor: "#fff", // Beyaz sınır çizgisi
    borderWidth: 2
  },
  textInput: {
    borderWidth: 1,
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 25, // Daha yumuşak köşeler
    borderColor: "#ccc",
    backgroundColor: "#f0f0f0",
    fontSize: 16 // Yazı boyutu büyütüldü
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between", // Butonlar arasında boşluk
    width: "60%" // Ekranın yüzde 60'ını kaplayacak şekilde
  },
  button: {
    width: "45%", // Butonlar eşit genişlikte
    borderRadius: 25 // Butonları daha yuvarlak yap
  }
});
