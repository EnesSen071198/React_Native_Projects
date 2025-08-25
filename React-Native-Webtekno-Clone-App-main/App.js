import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Header from "./src/components/Header";
import HomeScreen from "./src/screens/HomeScreen";
import DrawerContent from "./src/components/DrawerContent";
import FavoritesScreen from "./src/screens/FavoritesScreen";
import MostReadScreen from "./src/screens/MostReadScreen";
import MostSharedScreen from "./src/screens/MostSharedScreen";
import MostWatchedScreen from "./src/screens/MostWatchedScreen";
import NewsScreen from "./src/screens/NewsScreen";
import VideoScreen from "./src/screens/VideoScreen";
import PostScreen from "./src/screens/PostScreen";

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <DrawerContent {...props} />}
        screenOptions={{
          header: ({ navigation }) => <Header navigation={navigation} /> // Header component'ini ekledik
        }}>
        {/* Drawer ekranları */}
        <Drawer.Screen name='HomeScreen' component={HomeScreen} />
        <Drawer.Screen name='FavoritesScreen' component={FavoritesScreen} />
        <Drawer.Screen name='MostReadScreen' component={MostReadScreen} />
        <Drawer.Screen name='MostSharedScreen' component={MostSharedScreen} />
        <Drawer.Screen name='MostWatchedScreen' component={MostWatchedScreen} />
        <Drawer.Screen name='NewsScreen' component={NewsScreen} />
        <Drawer.Screen name='VideoScreen' component={VideoScreen} />
        <Drawer.Screen name='PostScreen' component={PostScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
