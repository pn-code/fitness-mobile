import { StyleSheet, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Button, Input } from "@rneui/base";
import { auth, db } from "../firebase/firebase";
import { doc, setDoc, getDocs, collection, query } from "firebase/firestore";
import Day from "../components/Day";

const JournalScreen = () => {
    const [name, setName] = useState("");
    const [weight, setWeight] = useState("");
    const [sets, setSets] = useState("");
    const [reps, setReps] = useState("");
    const [exercises, setExercises] = useState([]);
    const [entries, setEntries] = useState([]);

    const today = new Date()
        .toLocaleString("en-US", {
            timeZone: "America/Los_Angeles",
        })
        .slice(0, 9)
        .replaceAll("/", "-");

    const exercise = {
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

    const handlePress = async () => {
        setExercises((exercises) => [...exercises, exercise]);
        await setDoc(dbPath, {
            exercises: [...exercises, exercise],
            date: today,
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
            <View style={styles.inputContainer}>
                <Input
                    placeholderTextColor="#ababab"
                    style={styles.input}
                    type="text"
                    placeholder="Exercise Name"
                    onChangeText={(text) => setName(text)}
                    value={name}
                />
                <View style={styles.flexInputs}>
                    <View>
                        <Input
                            placeholderTextColor="#ababab"
                            style={styles.input}
                            type="number"
                            placeholder="Weight (lb)"
                            onChangeText={(text) => setWeight(text)}
                            value={weight}
                        />
                    </View>
                    <View>
                        <Input
                            placeholderTextColor="#ababab"
                            style={styles.input}
                            type="number"
                            placeholder="Sets"
                            onChangeText={(text) => setSets(text)}
                            value={sets}
                        />
                    </View>
                    <View>
                        <Input
                            placeholderTextColor="#ababab"
                            style={styles.input}
                            type="number"
                            placeholder="Reps"
                            onChangeText={(text) => setReps(text)}
                            value={reps}
                        />
                    </View>
                </View>
            </View>

            <Button onPress={handlePress} title="Add Exercise" />

            <ScrollView style={styles.scrollView}>
                {entries.map((entry) => (
                    <Day
                        key={entry.date}
                        date={entry.date}
                        exercises={entry.exercises}
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
    },
    scrollView: {
        marginHorizontal: 20,
    },
    flexInputs: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    input: {
        width: 100,
        color: "white",
        marginVertical: 10,
    },
});
