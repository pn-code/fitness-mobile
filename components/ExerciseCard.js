import { StyleSheet, View } from "react-native";
import React from "react";
import { Text } from "@rneui/base";

const ExerciseCard = ({ exercise }) => {
    return (
        <View>
            <Text>{exercise.name}</Text>
            <Text>{exercise.sets}</Text>
            <Text>{exercise.reps}</Text>
        </View>
    );
};

export default ExerciseCard;

const styles = StyleSheet.create({});
