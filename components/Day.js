import { StyleSheet, ScrollView } from "react-native";
import { Button, Text } from "@rneui/base";
import React from "react";
import Exercise from "./Exercise";

const Day = ({ date, exercises, deleteExercise, edit, deleteDay }) => {
    return (
        <ScrollView style={styles.container}>
            <Text h4 style={styles.date}>
                {date}
            </Text>
            { (exercises.length === 0 && edit) && <Button color="red" onPress={() => deleteDay(date)} title="Delete Day"/>}
            {exercises.map((exercise) => (
                <Exercise
                    key={
                        exercise.name +
                        exercise.weight +
                        exercise.sets +
                        exercise.reps
                    }
                    id={exercise.id}
                    date={date}
                    name={exercise.name}
                    weight={exercise.weight}
                    sets={exercise.sets}
                    reps={exercise.reps}
                    deleteExercise={deleteExercise}
                    edit={edit}
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
