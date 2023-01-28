import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import { Avatar } from "@rneui/base";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyPlansScreen from "./MyPlansScreen";
import BuildPlanScreen from "./BuildPlanScreen";
import AddPlanScreen from "./AddPlanScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import { auth } from "../firebase/firebase";
import { signOut } from "firebase/auth";

const PlanStack = ({ navigation }) => {
    const Stack = createNativeStackNavigator();
    const options = ({ navigation, route }) => ({
        headerStyle: { backgroundColor: "black" },
        headerTitleStyle: { color: "white" },
        headerTintColor: "white",
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        tabBarActiveBackgroundColor: "gray",
        tabBarInactiveBackgroundColor: "black",
        headerRight: () =>
            route.name === "My Plans" && (
                <View style={styles.nav}>
                    <TouchableOpacity
                        style={styles.navBtn}
                        onPress={() => navigation.navigate("Build Plan")}
                    >
                        <Ionicons
                            name="build-outline"
                            size={30}
                            color="white"
                        />
                        <Text style={styles.navText}>Build Plan</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.navBtn}
                        onPress={() => navigation.navigate("Add Plan")}
                    >
                        <Ionicons
                            name="add-circle-outline"
                            size={30}
                            color="white"
                        />
                        <Text style={styles.navText}>Add Plan</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={signOutUser}
                        style={styles.navBtn}
                    >
                        <Avatar
                            rounded
                            source={{ uri: auth?.currentUser?.photoURL }}
                        />
                        <Text style={styles.navText}>Log Out</Text>
                    </TouchableOpacity>
                </View>
            ),
    });

    const signOutUser = () => {
        auth.signOut().then(() => {
            navigation.replace("Login");
        });
    };

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
        backgroundColor: "black",
    },
    navBtn: {
        alignItems: "center",
        justifyContent: "center",
    },
    navText: {
        color: "white",
    },
});
