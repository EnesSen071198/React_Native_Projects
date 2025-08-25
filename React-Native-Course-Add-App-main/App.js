import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import { useState } from "react";
import React from "react";
import CourseInput from "./src/components/CourseInput";

export default function App() {
  const [modalIsVisible, setmodalIsVisible] = useState(false);
  const [courses, setCourses] = useState([]);

  const startModal = () => {
    setmodalIsVisible(true);
  };

  const endModal = () => {
    setmodalIsVisible(false);
  };

  const addCourse = (courseTitle) => {
    setCourses((currentCourses) => [
      ...currentCourses,
      {
        text: courseTitle,
        id: Math.random().toString()
      }
    ]);
    endModal();
  };

  return (
    <View style={styles.container}>
      <Button onPress={startModal} title='Kurs Ekle' />
      <CourseInput
        visible={modalIsVisible}
        onAddCourse={addCourse}
        onCancel={endModal}
      />
      <View>
        <FlatList
          data={courses}
          renderItem={({ item }) => (
            <View style={styles.courseItem}>
              <Text style={styles.courseText}>{item.text}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: "#f7f7f7" // Arka plan rengi eklendi
  },
  courseItem: {
    backgroundColor: "#6200ea", // Daha belirgin bir renk
    marginVertical: 8, // Dikeyde daha düzenli görünmesi için
    paddingVertical: 12, // İçeriklere daha fazla boşluk
    paddingHorizontal: 16,
    borderRadius: 10, // Daha fazla yuvarlama
    shadowColor: "#000", // Hafif gölge efekti
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3 // Android için gölge efekti
  },
  courseText: {
    color: "#fff",
    fontSize: 18, // Yazı boyutu büyütüldü
    fontWeight: "500"
  }
});
