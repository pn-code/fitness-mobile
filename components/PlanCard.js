import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import React, { useState } from "react";
import ExerciseCard from "./ExerciseCard";

const PlanCard = ({ plan }) => {
    const [viewPlan, setViewPlan] = useState(false);
    const [saved, setSaved] = useState(true);

    return (
        <View style={styles.container}>
            <View style={styles.planContainer}>
                <View style={styles.planText}>
                    <Text style={styles.title}>{plan.title}</Text>
                    <Text style={{ fontWeight: "bold" }}>
                        Created by {plan.user}
                    </Text>
                    <Text>{plan.desc}</Text>
                </View>
                <View style={styles.btnContainer}>
                    <Button
                        title={viewPlan ? "Hide Plan" : "View Plan"}
                        onPress={() => setViewPlan((viewPlan) => !viewPlan)}
                    />
                    <Button
                        title={!saved ? "Save Plan" : "Unsave Plan"}
                        onPress={() => setSaved((saved) => !saved)}
                    />
                </View>
            </View>
            {viewPlan && (
                <ScrollView>
                    {plan.exercises.map((exercise) => (
                        <ExerciseCard
                            key={exercise.name + exercise.sets + exercise.reps}
                            exercise={exercise}
                        />
                    ))}
                </ScrollView>
            )}
        </View>
    );
};

export default PlanCard;

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        borderRadius: 20,
        backgroundColor: "#d6d6d6",
        padding: 12,
    },
    planContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
        justifyContent: "center",
        padding: 12,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 8,
        color: "blue",
    },
    planText: {
        flex: 3,
    },
    btnContainer: {
        flex: 1,
    },
});
