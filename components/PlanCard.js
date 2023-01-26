import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExerciseCard from "./ExerciseCard";

const PlanCard = ({ plan }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{plan.title}</Text>
            {plan.exercises.map((exercise) => (
                <ExerciseCard exercise={exercise} />
            ))}
        </View>
    );
};

export default PlanCard;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "light-gray",
        padding: 12,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 8,
        color: "blue"
    },
});
