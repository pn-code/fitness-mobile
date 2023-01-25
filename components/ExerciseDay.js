import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import Exercise from "./Exercise";

const ExerciseDay = () => {
  return (
    <ScrollView>
      <Text>Date</Text>
      {/* Rendering Exercise Entries Here */}
      <Exercise/>
      <Exercise/>
      <Exercise/>
    </ScrollView>
  );
};

export default ExerciseDay;

const styles = StyleSheet.create({});
