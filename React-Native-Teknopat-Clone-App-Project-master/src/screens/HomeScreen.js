import React from "react";
import {
  View,
  Text,
  ImageBackground,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import data from "../data/Data.json"; // Dosyayı içe aktar

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.post}
            onPress={() => navigation.navigate("Detail", item)}>
            <ImageBackground
              source={{ uri: item.image }}
              style={styles.image}
              imageStyle={{ borderRadius: 10 }}>
              <View style={styles.overlay} />
              <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.readTime}>{item.readTime}</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        )}
        scrollEnabled={true}
        style={{ flex: 1 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 0
  },
  post: {
    marginBottom: 5
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
    padding: 10,
    position: "absolute",
    bottom: 0,
    left: 0
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginBottom: 5
  },
  description: {
    fontSize: 14,
    color: "white",
    marginBottom: 25
  },
  readTime: {
    fontSize: 12,
    color: "white",
    position: "absolute",
    bottom: 10,
    left: 10
  }
});

export default HomeScreen;
