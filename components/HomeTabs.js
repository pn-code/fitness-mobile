import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import JournalScreen from "../screens/JournalScreen";
import PlanStack from "../screens/PlanStack";
import FAQScreen from "../screens/FAQScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { Avatar } from "@rneui/base";
import { auth } from "../firebase/firebase";

const HomeTabs = ({navigation}) => {
    const Tab = createBottomTabNavigator();

    const signOutUser = () => {
      auth.signOut().then(()=> {
        navigation.replace("Login")
      })
    }

    const options = {
        headerStyle: { backgroundColor: "black" },
        headerTitleStyle: { color: "white" },
        headerTintColor: "white",
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        tabBarActiveBackgroundColor: "gray",
        tabBarInactiveBackgroundColor: "black",
        headerRight: () => (
            <View>
                <TouchableOpacity onPress={signOutUser} style={{ marginRight: 10 }}>
                    <Avatar source={{ uri: auth?.currentUser?.photoURL }} />
                </TouchableOpacity>
            </View>
        ),
    };

    return (
        <Tab.Navigator screenOptions={options}>
            <Tab.Screen name="Journal" component={JournalScreen} />
            <Tab.Screen name="Plans" component={PlanStack} />
            <Tab.Screen name="FAQ" component={FAQScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
};

export default HomeTabs;

const styles = StyleSheet.create({});
