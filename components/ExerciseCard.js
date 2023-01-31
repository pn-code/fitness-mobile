import { StyleSheet, View } from "react-native";
import React from "react";
import { Button, Text } from "@rneui/base";

const ExerciseCard = ({ exercise, removeExercise, build }) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.name}>{exercise.name}</Text>
                <Text style={styles.detail}>
                    {exercise.sets} sets of {exercise.reps} reps
                </Text>
            </View>
            {build && (
                <Button
                    style={{width: 100}}
                    color="red"
                    title="X"
                    onPress={() => removeExercise(exercise.id)}
                />
            )}
        </View>
    );
};

export default ExerciseCard;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
    },
    name: {
        fontSize: 18,
        fontWeight: "bold",
    },
    detail: {
        fontSize: 18,
    },
});
