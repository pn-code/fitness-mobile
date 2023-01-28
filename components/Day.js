import { StyleSheet, ScrollView } from "react-native";
import { Text } from "@rneui/base";
import React from "react";
import Exercise from "./Exercise";

const Day = ({ date, exercises }) => {
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

export default Day;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginVertical: 20,
        overflow: "scroll",
    },
    date: {
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: 10,
        borderBottomWidth: 2,
        borderColor: "black"
    },
});
