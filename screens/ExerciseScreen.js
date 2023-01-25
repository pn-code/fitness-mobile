import { StyleSheet, View, ScrollView } from "react-native";
import React, { useState } from "react";
import { Button, Input, ListItem, Text } from "@rneui/base";
import ExerciseDay from "../components/ExerciseDay";
import Exercise from "../components/Exercise";

const ExerciseScreen = () => {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [exercises, setExercises] = useState([]);

  const handlePress = () => {
    const exercise = {
      name,
      weight,
      sets,
      reps,
    };
    setExercises((exercises) => [...exercises, exercise]);
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
          placeholder="Exercise Name"
          onChangeText={(text) => setName(text)}
        />
        <Input placeholder="Weight" onChangeText={(text) => setWeight(text)} />
        <Input placeholder="Sets" onChangeText={(text) => setSets(text)} />
        <Input placeholder="Reps" onChangeText={(text) => setReps(text)} />
      </View>

      <Button onPress={handlePress} title="Add Exercise" />

      <View>
        {/* Rendering Daily Entries Here*/}
        <ScrollView>
          <Text h4 style={styles.date}>
            Today
          </Text>
          {/* Rendering Exercise Entries Here */}
          {exercises.map((exercise) => (
            <Exercise
              key={
                exercise.name + exercise.weight + exercise.sets + exercise.reps
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
    textAlign: "center"
  },
});
