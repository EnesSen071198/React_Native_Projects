import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";

const DetailScreen = ({ route }) => {
  const { title, image, description, readTime, post } = route.params;

  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: image }} style={styles.image}>
        <View style={styles.overlay} />
        <Text style={styles.title}>{title}</Text>
      </ImageBackground>
      <View style={styles.textContainer}>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.readTime}>{readTime}</Text>
        <Text style={styles.post}>{post}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  image: {
    width: "100%",
    height: 200,
    justifyContent: "flex-end"
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  textContainer: {
    marginTop: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    padding: 10
  },
  description: {
    fontSize: 16,
    color: "black",
    marginBottom: 15
  },
  readTime: {
    fontSize: 14,
    color: "gray",
    marginTop: 10
  },
  post: {
    fontSize: 14,
    color: "black",
    marginTop: 10
  }
});

export default DetailScreen;
