import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import React, { useState } from "react";
import ExerciseCard from "./ExerciseCard";
import { auth, db } from "../firebase/firebase";
import { doc, updateDoc } from "firebase/firestore";

const PlanCard = ({ plan, deletePlan }) => {
    const [viewPlan, setViewPlan] = useState(false);
    const [saved, setSaved] = useState(
        plan.savedBy.includes(auth.currentUser.uid)
    );

    const handleSave = async () => {
        if (!saved) {
            // If the plan is not saved by the user...
            // Edit the plan in the DB to include currentUser.uid
            try {
                const updatedSave = [...plan.savedBy, auth.currentUser.uid];
                await updateDoc(doc(db, "plans", plan.id), {
                    savedBy: updatedSave,
                });
                setSaved(true);
            } catch (error) {
                console.log(error);
            }
        } else {
            // If the plan is saved by the user...
            // Remove currentUser.uid from the plan
            try {
                const removedSave = plan.savedBy.filter(
                    (uid) => uid != auth.currentUser.uid
                );
                await updateDoc(doc(db, "plans", plan.id), {
                    savedBy: removedSave,
                });
                setSaved(false);
            } catch (error) {
                console.log(error);
            }
        }
    };

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
                        color="blue"
                        title={viewPlan ? "Hide Plan" : "View Plan"}
                        onPress={() => setViewPlan((viewPlan) => !viewPlan)}
                    />
                    {plan.userId !== auth.currentUser.uid && (
                        <Button
                            color="blue"
                            title={!saved ? "Save Plan" : "Unsave Plan"}
                            onPress={handleSave}
                        />
                    )}
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
                    {auth.currentUser.uid == plan.userId && (
                        <Button
                            title="Delete Plan"
                            onPress={() => deletePlan(plan.id)}
                        />
                    )}
                </ScrollView>
            )}
        </View>
    );
};

export default PlanCard;

const styles = StyleSheet.create({
    container: {
        marginVertical: 5,
        borderRadius: 6,
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
        fontSize: 20,
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
