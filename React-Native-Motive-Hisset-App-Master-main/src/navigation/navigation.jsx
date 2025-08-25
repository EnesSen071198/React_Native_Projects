import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import HomeScreen from '../screens/Home/HomeScreen'
import HabitScreen from '../screens/HabitTracker/HabitScreen'
import PomodoroTimer from '../screens/HabitTracker/PomodoroTimer'
import navigationRef from '../utils/navigation-ref'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#1DAEFF',
        tabBarInactiveTintColor: '#000',
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: '#E5E5E5'
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
          tabBarLabel: 'Ana Sayfa'
        }}
      />
      <Tab.Screen
        name="Habit"
        component={HabitScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="track-changes" size={size} color={color} />
          ),
          tabBarLabel: 'Alışkanlıklar'
        }}
      />
    </Tab.Navigator>
  )
}

const RootNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShadowVisible: false
    }}
    initialRouteName="Main"
  >
    <Stack.Screen
      name="Main"
      component={Tabs}
      options={{
        headerShown: false
      }}
    />
    <Stack.Screen
      name="PomodoroTimer"
      component={PomodoroTimer}
      options={{
        headerShown: false
      }}
    />
  </Stack.Navigator>
)

const Navigation = () => {
  const routeNameRef = React.useRef()

  const onStateChange = async () => {
    const currentRouteName = navigationRef.current?.getCurrentRoute()?.name
    routeNameRef.current = currentRouteName
  }

  return (
    <NavigationContainer ref={navigationRef} onStateChange={onStateChange}>
      <RootNavigator />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  feedIconStyle: focused => ({
    width: 25,
    height: 25,
    tintColor: focused ? '#1DAEFF' : '#000'
  })
})

export default Navigation
