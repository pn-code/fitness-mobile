import { StyleSheet, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Button, Input } from "@rneui/base";
import { auth, db } from "../firebase/firebase";
import {
    doc,
    setDoc,
    getDocs,
    collection,
    query,
    deleteDoc,
} from "firebase/firestore";
import Day from "../components/Day";
import { uuidv4 } from "@firebase/util";

const JournalScreen = () => {
    const [name, setName] = useState("");
    const [weight, setWeight] = useState("");
    const [sets, setSets] = useState("");
    const [reps, setReps] = useState("");
    const [exercises, setExercises] = useState([]);
    const [entries, setEntries] = useState([]);
    const [edit, setEdit] = useState(false);

    const today = new Date()
        .toLocaleString("en-US", {
            timeZone: "America/Los_Angeles",
        })
        .slice(0, 9)
        .replaceAll("/", "-");

    const exercise = {
        id: uuidv4(),
        name,
        weight,
        sets,
        reps,
    };

    // Looks into entire "days" collection of our user
    const q = query(collection(db, "users", auth.currentUser.uid, "days"));

    const dbPath = doc(db, "users", auth.currentUser.uid, "days", today);

    // Load Exercises From DB
    useEffect(() => {
        const getEntries = async () => {
            const snapshot = await getDocs(q);
            const days = [];
            snapshot.forEach((doc) => {
                days.unshift(doc.data());
            });
            if (days.length > 0) {
                setEntries(days);
                if (days.filter((day) => day.date === today).length > 0) {
                    setExercises(
                        days.filter((day) => day.date === today)[0].exercises
                    );
                }
            }
        };
        getEntries();
    }, []);

    const handleEdit = () => {
        setEdit((edit) => !edit);
    };

    const deleteExercise = async (exerciseId, date) => {
        const target = entries.filter((entry) => entry.date)[0];
        const updatedExercises = target.exercises.filter(
            (exercise) => exercise.id !== exerciseId
        );

        await setDoc(
            doc(db, "users", auth.currentUser.uid, "days", date),
            {
                exercises: target.exercises.filter(
                    (exercise) => exercise.id !== exerciseId
                ),
            },
            { merge: true }
        );

        if (date === today) {
            setExercises((exercises) =>
                exercises.filter((exercise) => exercise.id !== exerciseId)
            );
        }

        setEntries((entries) =>
            entries.map((entry) =>
                entry == target
                    ? { ...entry, exercises: updatedExercises }
                    : entry
            )
        );
    };

    const deleteDay = async (date) => {
        await deleteDoc(doc(db, "users", auth.currentUser.uid, "days", date));
        setEntries((entries) => entries.filter((entry) => entry.date !== date));
    };

    const handlePress = async () => {
        setExercises((exercises) => [...exercises, exercise]);

        const newEntry = {
            exercises: [...exercises, exercise],
            date: today,
        };

        await setDoc(dbPath, newEntry);

        if (entries[0].date !== newEntry.date) {
            setEntries((entries) => [newEntry, ...entries]);
        } else {
            const updatedEntries = entries.map((entry) =>
                entry.date === newEntry.date ? newEntry : entry
            );
            setEntries(updatedEntries);
        }

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
            {/* INPUTS */}
            <View style={styles.inputContainer}>
                <Input
                    placeholderTextColor="#ababab"
                    style={styles.inputText}
                    placeholder="Exercise Name"
                    onChangeText={(text) => setName(text)}
                    value={name}
                    maxLength={20}
                />
                <View style={styles.flexInputs}>
                    <View style={styles.input}>
                        <Input
                            style={styles.inputText}
                            placeholderTextColor="#ababab"
                            placeholder="Weight (lb)"
                            onChangeText={(text) => setWeight(text)}
                            value={weight}
                            maxLength={4}
                        />
                    </View>
                    <View style={styles.input}>
                        <Input
                            style={styles.inputText}
                            placeholderTextColor="#ababab"
                            placeholder="Sets"
                            onChangeText={(text) => setSets(text)}
                            value={sets}
                            maxLength={2}
                        />
                    </View>
                    <View style={styles.input}>
                        <Input
                            style={styles.inputText}
                            placeholderTextColor="#ababab"
                            placeholder="Reps"
                            onChangeText={(text) => setReps(text)}
                            value={reps}
                            maxLength={3}
                        />
                    </View>
                </View>
            </View>

            <Button onPress={handlePress} title="Add Exercise" />

            {/* END OF INPUTS */}

            {/* Edit Button */}
            <View>
                <Button
                    onPress={() => handleEdit()}
                    title={edit ? "Finish Editing" : "Edit"}
                    color={edit ? "salmon" : "green"}
                />
            </View>

            {/* ENTRIES */}
            <ScrollView style={styles.scrollView}>
                {entries.map((entry) => (
                    <Day
                        key={entry.date}
                        date={entry.date}
                        exercises={entry.exercises}
                        edit={edit}
                        deleteExercise={deleteExercise}
                        deleteDay={deleteDay}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

export default JournalScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputContainer: {
        backgroundColor: "#404040",
        paddingTop: 10,
    },
    flexInputs: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    input: {
        flex: 1,
    },
    inputText: {
        color: "white",
    },
});
