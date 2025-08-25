import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import HomeScreen from "./src/screens/HomeScreen";
import CourseScreen from "./src/screens/CourseScreen";
import AboutScreen from "./src/screens/AboutScreen";
import CourseInfo from "./src/screens/CourseInfo";
import CounterScreen from "./src/screens/CounterScreen";

export default function App() {
  return (
    <NavigationContainer styles={styles.container}>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{ title: "Welcome Homepage" }}
        />
        <Stack.Screen name='Course' component={CourseScreen} />
        <Stack.Screen name='About' component={AboutScreen} />
        <Stack.Screen name='Info' component={CourseInfo} />
        <Stack.Screen name='Counter' component={CounterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
