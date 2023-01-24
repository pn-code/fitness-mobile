import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";

const Stack = createNativeStackNavigator();

const globalScreenOptions = {
    headerStyle: { backgroundColor: "black" },
    headerTitleStyle: { color: "white" },
    headerTintColor: "white",
    // tabBarActiveTintColor: "white",
    // tabBarInactiveTintColor: "white",
    // tabBarActiveBackgroundColor: "gray",
    // tabBarInactiveBackgroundColor: "black",
};

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={globalScreenOptions}>
                <Stack.Screen firstRoute name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
