import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExerciseCard from "./ExerciseCard";

const PlanCard = ({ plan }) => {
    return (
        <View style={styles.container}>
            <View style={styles.planText}>
                <Text style={styles.title}>{plan.title}</Text>
                <Text>{plan.desc}</Text>
            </View>
            {/* Btn that opens PlanDetails as a modal */}
            <Button style={styles.viewPlanBtn}>View Plan</Button>
            {/* {plan.exercises.map((exercise) => (
                <ExerciseCard
                    key={exercise.name + exercise.sets + exercise.reps}
                    exercise={exercise}
                />
            ))} */}
        </View>
    );
};

export default PlanCard;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
        justifyContent: "center",
        padding: 12,
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 8,
        color: "blue",
    },
    planText: {
        flex: 3,
    },
    viewPlanBtn: {
        flex: 1,
    },
});
