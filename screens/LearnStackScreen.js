import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LearnFitnessScreen from "./LearnFitnessScreen";
import LearnNutritionScreen from "./LearnNutritionScreen";
import LearnHomeScreen from "./LearnHomeScreen";

const LearnStackScreen = () => {
    const LearnStack = createNativeStackNavigator();
    return (
        <LearnStack.Navigator screenOptions={{ headerShown: false }}>
            <LearnStack.Screen name="Home" component={LearnHomeScreen} />
            <LearnStack.Screen
                name="Nutrition"
                component={LearnNutritionScreen}
            />
            <LearnStack.Screen name="Fitness" component={LearnFitnessScreen} />
        </LearnStack.Navigator>
    );
};

export default LearnStackScreen;

const styles = StyleSheet.create({});
