import { StyleSheet, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Button, Input } from "@rneui/base";
import { auth, db } from "../firebase/firebase";
import { doc, setDoc, onSnapshot, collection, query } from "firebase/firestore";
import ExerciseDay from "../components/ExerciseDay";

const ExerciseScreen = () => {
    const [name, setName] = useState("");
    const [weight, setWeight] = useState("");
    const [sets, setSets] = useState("");
    const [reps, setReps] = useState("");
    const [exercises, setExercises] = useState([]);
    const [entries, setEntries] = useState([]);

    const exercise = {
        name,
        weight,
        sets,
        reps,
    };

    // Looks into entire "days" collection of our user
    const q = query(collection(db, "users", auth.currentUser.uid, "days"));

    const dbPath = doc(
        db,
        "users",
        auth.currentUser.uid,
        "days",
        new Date().toISOString().slice(0, 10)
    );

    // Load Exercises From DB
    useEffect(() => {
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const days = [];
            snapshot.forEach((doc) => {
                days.push(doc.data());
            });
            setEntries(days);
        });

        return unsubscribe;
    }, []);

    const handlePress = async () => {
        setExercises((exercises) => [...exercises, exercise]);
        await setDoc(dbPath, {
            exercises: [...exercises, exercise],
            date: new Date().toISOString().slice(0, 10),
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
        <View style={styles.container}>
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

            <ScrollView>
                {entries.map((entry) => (
                    <ExerciseDay
                        key={entry.date}
                        date={
                            entry.date === new Date().toISOString().slice(0, 10)
                                ? "Today"
                                : entry.date
                        }
                        exercises={entry.exercises}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

export default ExerciseScreen;

const styles = StyleSheet.create({});
