import { StyleSheet, Text, TextInput, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";

export default function SearchBar({ term, onTermChange, onTermSubmit }) {
  return (
    <View style={styles.backgroundStyle}>
      <FontAwesome
        style={styles.iconStyle}
        name='search'
        size={28}
        color='black'
      />
      <TextInput
        style={styles.inputStyle}
        placeholder='Ara'
        autoCorrect={false}
        autoCapitalize='none'
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
        value={term}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "lightgray",
    flexDirection: "row",
    margin: 10,
    padding: 12,
    alignItems: "center",
    borderRadius: 18
  },
  iconStyle: {
    marginHorizontal: 15
  },
  inputStyle: {
    flex: 1,
    fontSize: 18
  }
});
