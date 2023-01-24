import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ExerciseScreen from "../screens/ExerciseScreen";
import NutritionScreen from "../screens/NutritionScreen";
import FAQScreen from "../screens/FAQScreen";
import ProfileScreen from "../screens/ProfileScreen";

const HomeTabs = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator>
            <Tab.Screen name="Exercise" component={ExerciseScreen} />
            <Tab.Screen name="Nutrition" component={NutritionScreen} />
            <Tab.Screen name="FAQ" component={FAQScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
};

export default HomeTabs;

const styles = StyleSheet.create({});
