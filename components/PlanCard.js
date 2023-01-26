import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExerciseCard from "./ExerciseCard";

const PlanCard = ({ plan }) => {
    return (
        <View>
            <Text>{plan.title}</Text>
            {plan.exercises.map((exercise) => (
                <ExerciseCard exercise={exercise} />
            ))}
        </View>
    );
};

export default PlanCard;

const styles = StyleSheet.create({});
