import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyPlansScreen from "./MyPlansScreen";
import BuildPlanScreen from "./BuildPlanScreen";
import AddPlanScreen from "./AddPlanScreen";

const PlanStack = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="My Plans" component={MyPlansScreen}/>
            <Stack.Screen name="Build Plan" component={BuildPlanScreen}/>
            <Stack.Screen name="Add Plan" component={AddPlanScreen}/>
        </Stack.Navigator>
    );
};

export default PlanStack;

const styles = StyleSheet.create({});
