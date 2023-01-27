import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import PlanCard from "../components/PlanCard";
import { useState } from "react";

const fakePlan = {
    title: "Test",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    exercises: [
        {
            name: "Push Ups",
            reps: "20",
            sets: "10",
            weight: 180,
        },
        {
            name: "Push Ups",
            reps: "20",
            sets: "10",
            weight: 180,
        },
        {
            name: "Push Ups",
            reps: "20",
            sets: "10",
            weight: 180,
        },
        {
            name: "Push Ups",
            reps: "20",
            sets: "10",
            weight: 180,
        },
    ],
    id: 21390841,
    user: "Philip Nguyen",
    userId: 123215431,
};

const AddPlanScreen = () => {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {/* Render Individual Plan Components Here */}
                <PlanCard plan={fakePlan} />
            </ScrollView>
        </View>
    );
};

export default AddPlanScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        marginHorizontal: 20,
    },
});
