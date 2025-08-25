import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function Information({ title, img, description }) {
  return (
    <View>
      <Image style={styles.img} source={img} />
      <View style={styles.descTitle}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: "100%",
    resizeMode: "cover"
  },
  descTitle: {
    alignItems: "center",
    paddingVertical: 20
  },
  title: { fontSize: 20 },
  description: { fontSize: 17, margin: 20, padding: 10 }
});
