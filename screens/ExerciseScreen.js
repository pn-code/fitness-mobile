import { StyleSheet, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Button, Input, Text } from "@rneui/base";
import Exercise from "../components/Exercise";
import { auth, db } from "../firebase/firebase";
import { doc, setDoc, onSnapshot } from "firebase/firestore";

const ExerciseScreen = () => {
    const [name, setName] = useState("");
    const [weight, setWeight] = useState("");
    const [sets, setSets] = useState("");
    const [reps, setReps] = useState("");
    const [exercises, setExercises] = useState([]);

    const exercise = {
        name,
        weight,
        sets,
        reps,
    };

    const id =
        auth.currentUser.uid + ":" + new Date().toISOString().slice(0, 10);

    // Load Exercises From DB
    useEffect(() => {
        const unsubscribe = onSnapshot(doc(db, "exercise_days", id), (doc) => {
            if (doc.exists()) {
                setExercises(doc.data().exercises);
            }
        });
        return unsubscribe;
    }, []);

    const handlePress = async () => {
        setExercises((exercises) => [...exercises, exercise]);
        await setDoc(doc(db, "exercise_days", id), {
            exercises: [...exercises, exercise],
            userId: auth.currentUser.uid,
        });
        clearInputs();
    };

    const clearInputs = () => {
        setName("");
        setWeight("");
        setSets("");
        setReps("");
    };

    return (
        <View>
            <View style={styles.modal}>
                <Input
                    type="text"
                    placeholder="Exercise Name"
                    onChangeText={(text) => setName(text)}
                    value={name}
                />
                <Input
                    type="number"
                    placeholder="Weight (lb)"
                    onChangeText={(text) => setWeight(text)}
                    value={weight}
                />
                <Input
                    type="number"
                    placeholder="Sets"
                    onChangeText={(text) => setSets(text)}
                    value={sets}
                />
                <Input
                    type="number"
                    placeholder="Reps"
                    onChangeText={(text) => setReps(text)}
                    value={reps}
                />
            </View>

            <Button onPress={handlePress} title="Add Exercise" />

            <View>
                {/* Rendering Daily Entries Here*/}
                <ScrollView style={{ marginHorizontal: 40 }}>
                    <Text h4 style={styles.date}>
                        Today
                    </Text>
                    {/* Rendering Exercise Entries Here */}
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
            </View>
        </View>
    );
};

export default ExerciseScreen;

const styles = StyleSheet.create({
    date: {
        textAlign: "center",
    },
});
