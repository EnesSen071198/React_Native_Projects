import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList
} from "@react-navigation/drawer";

const Drawer = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        <Text style={styles.headerText}>Kategoriler</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerHeader: {
    padding: 20,
    backgroundColor: "#f4f4f4"
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold"
  }
});

export default Drawer;
