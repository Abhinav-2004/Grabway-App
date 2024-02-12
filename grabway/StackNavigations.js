import { StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screen/LoginScreen";
import SavedScreen from "./screen/SavedScreen";
import HomeScreen from "./screen/HomeScreen";
import BookingScreen from "./screen/BookingScreen";
import ProfileScreen from "./screen/ProfileScreen";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import ContactScreen from "./screen/ContactScreen";
import EntryScreen from "./screen/EntryScreen";
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import MapScreen from "./screen/MapScreen";
const StackNavigations = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
  const BottomTabs = () => {
  
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="home" size={24} color="#E51B23" />
              ) : (
                <AntDesign name="home" size={24} color="black" />
              ),
          }}
        />

        <Tab.Screen
          name="Saved"
          component={SavedScreen}
          options={{
            tabBarLabel: "Saved",
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <FontAwesome5 name="calendar-check" size={21} color="#E51B23" />
                
              ) : (
                <FontAwesome5 name="calendar-check" size={20} color="black" />
              ),
          }}
        />

        <Tab.Screen
          name="Bookings"
          component={BookingScreen}
          options={{
            tabBarLabel: "Bookings",
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                
                <FontAwesome6 name="clock-rotate-left" size={21} color="#E51B23" />
              ) : (
                <FontAwesome6 name="clock-rotate-left" size={20} color="black" />
              ),
          }}
        />

        <Tab.Screen
          name="Contact"
          component={ContactScreen}
          options={{
            tabBarLabel: "Contact",
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <FontAwesome5 name="user-alt" size={21} color="#E51B23" />
              ) : (
                <FontAwesome5 name="user" size={20} color="black" />
              ),
          }}
        />
      </Tab.Navigator>
    );
  };
  return (
    <>
      <Stack.Navigator>
      <Stack.Screen
          name="Entry"
          component={EntryScreen}
          options={{ headerShown: false }}
        />

      <Stack.Screen
          name="Landing"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
       
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="MapScreen"
          component={MapScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </>
  );
};

export default StackNavigations;

const styles = StyleSheet.create({});
