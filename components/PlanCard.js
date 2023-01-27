import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";
import ExerciseCard from "./ExerciseCard";

const PlanCard = ({ plan }) => {
    const [viewPlan, setViewPlan] = useState(false);

    return (
        <View>
            <View style={styles.planContainer}>
                <View style={styles.planText}>
                    <Text style={styles.title}>{plan.title}</Text>
                    <Text>{plan.desc}</Text>
                </View>

                <Button
                    title={viewPlan ? "Hide Plan" : "View Plan"}
                    onPress={() => setViewPlan((viewPlan) => !viewPlan)}
                    style={styles.viewPlanBtn}
                />
            </View>

            {viewPlan &&
                plan.exercises.map((exercise) => (
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
    planContainer: {
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
