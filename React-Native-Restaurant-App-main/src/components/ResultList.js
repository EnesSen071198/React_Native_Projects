import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import React from "react";
import ResultDetail from "./ResultDetail";
import { Ionicons } from "@expo/vector-icons"; // Iconları kullanmak için Expo'nun Ionicons kütüphanesi
import { useNavigation } from "@react-navigation/native";

export default function ResultList({ title, results }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>{title}</Text>
        <Ionicons name='restaurant' size={24} color='#FF6347' />
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false} // Kaydırma çubuğunu gizledik
        data={results}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ResultsShow", { id: item.id });
              }}
              style={styles.touchable}>
              <ResultDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10, // Her liste arasında dikey boşluk
    paddingHorizontal: 15 // Kenarlardan boşluk
  },
  headerContainer: {
    flexDirection: "row", // Başlık ve simgeyi yan yana koymak için
    alignItems: "center", // Simge ve metni hizalamak için
    justifyContent: "space-between", // Metin ve simge arasında boşluk
    marginBottom: 10 // Başlık ve içerik arasında boşluk
  },
  title: {
    fontSize: 20, // Başlık boyutunu büyüttük
    fontWeight: "bold", // Kalın font
    color: "#333", // Daha koyu ve profesyonel bir renk
    letterSpacing: 1 // Karakterler arasında daha fazla boşluk
  },
  touchable: {
    marginRight: 15, // Kartlar arasında boşluk
    backgroundColor: "#fff", // Beyaz kart rengi
    borderRadius: 15, // Kartları daha yuvarlak yapalım
    shadowColor: "#000", // Gölge için siyah renk
    shadowOffset: { width: 0, height: 2 }, // Gölge ofseti
    shadowOpacity: 0.25, // Gölge opaklığı
    shadowRadius: 6, // Gölge genişliği
    elevation: 5, // Android için gölge efekti
    overflow: "hidden" // Köşelerin dışına taşan elemanları gizleyelim
  }
});
