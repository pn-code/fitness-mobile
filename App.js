import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import ExerciseScreen from "./screens/ExerciseScreen";
import NutritionScreen from "./screens/NutritionScreen";
import FAQScreen from "./screens/FAQScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { auth } from "./firebase/firebase";
import React, { useEffect, useState } from "react";

const Tab = createBottomTabNavigator();

const globalScreenOptions = {
    headerStyle: { backgroundColor: "black" },
    headerTitleStyle: { color: "white" },
    headerTintColor: "white",
};

export default function App() {
    const [user, setUser] = useState(auth || null);

    return (
        <NavigationContainer>
            {!user && (
                <Tab.Navigator>
                    <Tab.Screen name="Login" component={LoginScreen} />
                    <Tab.Screen name="Register" component={RegisterScreen} />
                </Tab.Navigator>
            )}

            {user && (
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={HomeScreen} />
                    <Tab.Screen name="Exercise" component={ExerciseScreen} />
                    <Tab.Screen name="Nutrition" component={NutritionScreen} />
                    <Tab.Screen name="FAQ" component={FAQScreen} />
                    <Tab.Screen name="Profile" component={ProfileScreen} />
                </Tab.Navigator>
            )}
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
