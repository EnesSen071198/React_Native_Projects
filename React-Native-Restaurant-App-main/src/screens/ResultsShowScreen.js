import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import yelp from "../api/yelp";
import Icon from "react-native-vector-icons/Ionicons"; // İkon bileşenini içe aktar

export default function ResultsShowScreen({ route }) {
  const [result, setResult] = useState(null);
  const id = route.params.id;

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    console.log(response.data);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null; // Yükleniyor durumu için bir şey döndürebilirsiniz
  }

  // Örnek görsel URL'leri
  const examplePhotos =
    result.photos.length > 0
      ? result.photos
      : [
          "https://images.unsplash.com/photo-1535400255456-984241443b29?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1535400459727-5d1544cb0939?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1710091691802-7dedb8af9a77?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ];

  // Restoranın açık mı kapalı mı olduğunu kontrol et
  const isOpenNow = result.hours && result.hours[0].is_open_now;

  // Başlık ve bilgi bileşenlerini içeren renderItem fonksiyonu
  const renderItem = ({ item }) => (
    <Image style={styles.image} source={{ uri: item }} />
  );

  return (
    <FlatList
      data={examplePhotos} // Örnek görsel dizisi
      keyExtractor={(item) => item} // Her görselin URI'sini anahtar olarak kullan
      renderItem={renderItem} // Görseli render eden fonksiyon
      ListHeaderComponent={
        <View style={styles.headerContainer}>
          <Image
            source={{ uri: result.image_url }}
            style={styles.headerImage}
          />
          <Text style={styles.title}>{result.name}</Text>

          {/* Telefon Bilgisi */}
          <View style={styles.infoContainer}>
            <Icon name='call' size={20} color='#007AFF' />
            <Text style={styles.infoText}>
              Telefon: {result.display_phone || result.phone}
            </Text>
          </View>

          {/* Fiyat Bilgisi */}
          <View style={styles.infoContainer}>
            <Icon name='cash' size={20} color='#007AFF' />
            <Text style={styles.infoText}>Fiyat: {result.price}</Text>
          </View>

          {/* Derecelendirme Bilgisi */}
          <View style={styles.infoContainer}>
            <Icon name='star' size={20} color='#FFA500' />
            <Text style={styles.infoText}>
              Derecelendirme: {result.rating} ({result.review_count} yorum)
            </Text>
          </View>

          {/* Adres Bilgisi */}
          <View style={styles.infoContainer}>
            <Icon name='location' size={20} color='#007AFF' />
            <Text style={styles.infoText}>
              Adres: {result.location.display_address.join(", ")}
            </Text>
          </View>

          {/* Restoran Açık/Kapalı Durumu */}
          <View style={styles.infoContainer}>
            <Icon
              name={isOpenNow ? "checkmark-circle" : "close-circle"}
              size={20}
              color={isOpenNow ? "green" : "red"}
            />
            <Text style={styles.infoText}>{isOpenNow ? "Açık" : "Kapalı"}</Text>
          </View>
        </View>
      } // ListHeaderComponent ile üst bileşen
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff"
  },
  headerContainer: {
    paddingBottom: 10
  },
  headerImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 10
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },
  infoText: {
    fontSize: 16,
    marginLeft: 10,
    color: "#444"
  },
  image: {
    width: "100%", // Ekran genişliğine göre ayarlamak için %100
    height: 200, // Yükseklik
    borderRadius: 10,
    marginBottom: 10
  }
});
