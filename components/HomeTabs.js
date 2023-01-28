import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Avatar } from "@rneui/base";
import { auth } from "../firebase/firebase";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import JournalScreen from "../screens/JournalScreen";
import PlanStack from "../screens/PlanStack";
import LearnScreen from "../screens/LearnScreen";
import ProfileScreen from "../screens/ProfileScreen";
import Ionicons from "react-native-vector-icons/Ionicons";

const HomeTabs = ({ navigation }) => {
    const Tab = createBottomTabNavigator();

    const signOutUser = () => {
        auth.signOut().then(() => {
            navigation.replace("Login");
        });
    };

    const options = ({ route }) => ({
        // Tab Styles
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        tabBarActiveBackgroundColor: "gray",
        tabBarInactiveBackgroundColor: "black",
        tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Journal") {
                iconName = focused ? "journal" : "journal-outline";
            } else if (route.name === "Plans") {
                iconName = focused ? "construct" : "construct-outline";
            } else if (route.name === "Learn") {
                iconName = focused ? "library" : "library-outline";
            } else if (route.name === "Profile") {
                iconName = focused ? "person" : "person-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
        },
        // Header Styles
        headerStyle: { backgroundColor: "black" },
        headerTitleStyle: { color: "white" },
        headerTintColor: "white",
        headerRight: () => (
            <View>
                <TouchableOpacity
                    onPress={signOutUser}
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: 20,
                    }}
                >
                    <Avatar
                        rounded
                        source={{ uri: auth?.currentUser?.photoURL }}
                    />
                    <Text
                        style={{
                            color: "white",
                        }}
                    >
                        Log Out
                    </Text>
                </TouchableOpacity>
            </View>
        ),
    });

    return (
        <Tab.Navigator screenOptions={options}>
            <Tab.Screen name="Journal" component={JournalScreen} />
            <Tab.Screen
                name="Plans"
                options={{ headerShown: false }}
                component={PlanStack}
            />
            <Tab.Screen name="Learn" component={LearnScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
};

export default HomeTabs;

const styles = StyleSheet.create({});
