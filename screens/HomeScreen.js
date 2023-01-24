import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button, Input, Image } from "@rneui/base";
import React, { useEffect, useState } from "react";

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <StatusBar style="light" />
            <Text>Hello World, I am HomeScreen</Text>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({});
