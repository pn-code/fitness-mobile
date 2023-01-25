import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import { Button, Input, ListItem } from "@rneui/base";
import ExerciseDay from "../components/ExerciseDay";

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
        <ExerciseDay />
      </View>
    </View>
  );
};

export default ExerciseScreen;

const styles = StyleSheet.create({});
