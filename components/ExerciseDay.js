import { StyleSheet, ScrollView } from "react-native";
import { Text } from "@rneui/base";
import React from "react";
import Exercise from "./Exercise";

const ExerciseDay = ({ date, exercises }) => {
    return (
        <ScrollView style={styles.container}>
            <Text h4 style={styles.date}>
                {date}
            </Text>
            {exercises.map((exercise) => (
                <Exercise
                    key={
                        exercise.name +
                        exercise.weight +
                        exercise.sets +
                        exercise.reps
                    }
                    name={exercise.name}
                    weight={exercise.weight}
                    sets={exercise.sets}
                    reps={exercise.reps}
                />
            ))}
        </ScrollView>
    );
};

export default ExerciseDay;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 40,
        marginVertical: 20,
    },
    date: {
        textAlign: "center",
        fontWeight: 800,
    },
});
