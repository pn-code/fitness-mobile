import { StyleSheet, View } from "react-native";
import React from "react";
import { Text } from "@rneui/base";

const ExerciseCard = ({ exercise }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{exercise.name}</Text>
            <Text style={styles.detail}>
                {exercise.sets} sets of {exercise.reps} reps
            </Text>
        </View>
    );
};

export default ExerciseCard;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 12,
        padding: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: "bold",
    },
    detail: {
        fontSize: 24,
    },
});
