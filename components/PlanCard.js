import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExerciseCard from "./ExerciseCard";

const PlanCard = ({ plan }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{plan.title}</Text>
            {plan.exercises.map((exercise) => (
                <ExerciseCard
                    key={exercise.name + exercise.sets + exercise.reps}
                    exercise={exercise}
                />
            ))}
        </View>
    );
};

export default PlanCard;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        backgroundColor: "light-gray",
        padding: 12,
        borderBottomWidth: 2,
        borderBottomColor: "black",
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 8,
        color: "blue",
    },
});
