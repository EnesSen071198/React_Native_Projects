import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import React, { useState } from "react";

export default function RandomBoxScreen() {
  const [colors, setColors] = useState([]); // Başlangıçta boş bir dizi

  const randomColor = () => {
    const red = Math.floor(Math.random() * 256); // 0..255
    const green = Math.floor(Math.random() * 256); // 0..255
    const blue = Math.floor(Math.random() * 256); // 0..255
    return `rgb(${red},${green},${blue})`;
  };

  return (
    <View style={styles.container}>
      <Button
        title='Add Box'
        onPress={() => {
          setColors([...colors, randomColor()]); // Butona her basıldığında rastgele renk ekle
        }}
      />
      <FlatList
        data={colors}
        keyExtractor={(item, index) => index.toString()} // Her eleman için benzersiz anahtar
        renderItem={({ item }) => {
          return (
            <View
              style={{
                height: 150,
                width: 150,
                backgroundColor: item, // random renk kullan
                marginVertical: 20,
                borderRadius: 10 // köşeleri yuvarlat
              }}
            />
          );
        }}
      />
      {colors.length === 0 && ( // Eğer kutu yoksa bilgi mesajı göster
        <Text style={styles.infoText}>
          No boxes added yet. Press "Add Box" to create one!
        </Text>
      )}
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
  infoText: {
    fontSize: 16,
    color: "#333",
    marginTop: 20
  }
});
