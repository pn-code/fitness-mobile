import { StyleSheet, Text, ScrollView, View } from "react-native";
import React, { useState } from "react";
import { Button, Input } from "@rneui/base";

const BuildPlanScreen = () => {
    const [title, setTitle] = useState("");
    const [exercise, setExercise] = useState({
        name: "",
        sets: "",
        reps: "",
    });

    const handleChange = (text, name) => {
        setExercise((exercise) => ({ ...exercise, [name]: text }));
    };

    return (
        <ScrollView>
            <Input
                onChangeText={(text) => setTitle(text)}
                placeholder="Plan Title"
                keyboardType="text"
                value={title}
            />

            <View>
                <Input
                    onChangeText={(text) => handleChange(text, "name")}
                    placeholder="Exercise Name"
                    keyboardType="text"
                    value={exercise.name}
                />
                <Input
                    onChangeText={(text) => handleChange(text, "sets")}
                    placeholder="Set Scheme (for example: 3-4)"
                    keyboardType="text"
                    value={exercise.sets}
                />
                <Input
                    onChangeText={(text) => handleChange(text, "reps")}
                    placeholder="Rep Scheme (for example: 8-12)"
                    keyboardType="text"
                    value={exercise.reps}
                />
            </View>

            <ScrollView>{/* Render ExerciseCards Here */}</ScrollView>

            <Button title="Add Exercise" />
            <Button title="Submit Plan" />
        </ScrollView>
    );
};

export default BuildPlanScreen;

const styles = StyleSheet.create({});
