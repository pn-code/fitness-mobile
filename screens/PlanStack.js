import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyPlansScreen from "./MyPlansScreen";
import BuildPlanScreen from "./BuildPlanScreen";
import AddPlanScreen from "./AddPlanScreen";
import Ionicons from "react-native-vector-icons/Ionicons";

const PlanStack = () => {
    const Stack = createNativeStackNavigator();
    const options = ({ navigation, route }) => ({
        headerRight: () =>
            route.name === "My Plans" && (
                <View style={styles.nav}>
                    <TouchableOpacity
                        style={styles.navBtn}
                        onPress={() => navigation.navigate("Build Plan")}
                    >
                        <Ionicons name="build-outline" size={30} />
                        <Text>Build Plan</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                                            style={styles.navBtn}
                        onPress={() => navigation.navigate("Add Plan")}
                    >
                        <Ionicons name="add-circle-outline" size={30} />
                        <Text>Add Plan</Text>
                    </TouchableOpacity>
                </View>
            ),
    });

    return (
        <Stack.Navigator screenOptions={options}>
            <Stack.Screen name="My Plans" component={MyPlansScreen} />
            <Stack.Screen name="Build Plan" component={BuildPlanScreen} />
            <Stack.Screen name="Add Plan" component={AddPlanScreen} />
        </Stack.Navigator>
    );
};

export default PlanStack;

const styles = StyleSheet.create({
    nav: {
        marginRight: 16,
        flexDirection: "row",
        gap: 20,
    },
    navBtn: {
        alignItems: "center",
        justifyContent: "center"
    }
});
