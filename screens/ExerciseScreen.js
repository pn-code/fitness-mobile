import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import { Button, Input, ListItem } from "@rneui/base";

const ExerciseScreen = () => {
  const [exercise, setExercise] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [exercises, setExercises] = useState([])

  return (
    <View>
      <View style={styles.modal}>
        <Input placeholder="Exercise Name" />
        <Input placeholder="Sets" />
        <Input placeholder="Reps" />
      </View>
      <Button onPress={() => setOpen(true)} title="Add Exercise" />
      <View>
        {/* Rendering Daily Entries Here*/}
        <ScrollView>
          <Text>Date</Text>
          {/* Rendering Exercise Entries Here */}
          <View>
            <Text>Exercise Name</Text>
            <Text>Sets</Text>
            <Text>Reps</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default ExerciseScreen;

const styles = StyleSheet.create({});
