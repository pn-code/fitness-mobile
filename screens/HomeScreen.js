import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button, Input, Image } from "@rneui/base";
import React, { useEffect, useState } from "react";
import HomeTabs from "../components/HomeTabs";

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <StatusBar style="light" />
            <View>Welcome to The Home Screen</View>
            <HomeTabs/>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({});
