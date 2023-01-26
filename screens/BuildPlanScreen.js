import { StyleSheet, Text, ScrollView, View } from "react-native";
import React, { useState } from "react";
import { Button, Input } from "@rneui/base";
import ExerciseCard from "../components/ExerciseCard";
import { auth, db } from "../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';

const BuildPlanScreen = ({ navigation }) => {
    const [title, setTitle] = useState("");
    const [exercise, setExercise] = useState({
        name: "",
        sets: "",
        reps: "",
    });
    
    const [exercises, setExercises] = useState([]);

    const planRef = doc(db, "users", auth.currentUser.uid, "plans", uuidv4())

    const handleSubmit = async () => {
        await setDoc(planRef, {
          title,
          exercises: [...exercises]
        });
        navigation.replace("My Plans")
    };

    const handleChange = (text, name) => {
        setExercise((exercise) => ({ ...exercise, [name]: text }));
    };

    const handleExercise = () => {
        setExercises((exercises) => [...exercises, exercise]);
        setExercise({
            name: "",
            sets: "",
            reps: "",
        });
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

            <ScrollView>
                {exercises.map((exercise) => (
                    <ExerciseCard
                        key={exercise.name + new Date()}
                        exercise={exercise}
                    />
                ))}
            </ScrollView>

            <Button onPress={handleExercise} title="Add Exercise" />
            <Button onPress={handleSubmit} title="Submit Plan" />
        </ScrollView>
    );
};

export default BuildPlanScreen;

const styles = StyleSheet.create({});
