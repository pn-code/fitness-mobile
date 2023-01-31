import { StyleSheet, Text, ScrollView, View } from "react-native";
import React, { useState } from "react";
import { Button, Input } from "@rneui/base";
import ExerciseCard from "../components/ExerciseCard";
import { auth, db } from "../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

const BuildPlanScreen = ({ navigation }) => {
<<<<<<< HEAD
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [exercise, setExercise] = useState({
        id: uuidv4(),
        name: "",
        sets: "",
        reps: "",
=======
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [exercise, setExercise] = useState({
    name: "",
    sets: "",
    reps: "",
  });

  const [exercises, setExercises] = useState([]);

  const handleSubmit = async () => {
    const planId = uuidv4();
    await setDoc(doc(db, "plans", planId), {
      title,
      desc,
      exercises: [...exercises],
      id: planId,
      userId: auth.currentUser.uid,
      user: auth.currentUser.displayName,
      savedBy: [auth.currentUser.uid],
>>>>>>> 95a883f7df8f4dca4a91d6901ca60fcb15ba6032
    });
    navigation.replace("My Plans");
  };

  const handleChange = (text, name) => {
    setExercise((exercise) => ({ ...exercise, [name]: text }));
  };

<<<<<<< HEAD
    const handleSubmit = async () => {
        const planId = uuidv4();
        await setDoc(doc(db, "plans", planId), {
            title,
            desc,
            exercises: [...exercises],
            id: planId,
            userId: auth.currentUser.uid,
            user: auth.currentUser.displayName,
            savedBy: [auth.currentUser.uid],
        });
        navigation.replace("My Plans");
    };
=======
  const handleExercise = () => {
    setExercises((exercises) => [...exercises, exercise]);
    setExercise({
      name: "",
      sets: "",
      reps: "",
    });
  };
>>>>>>> 95a883f7df8f4dca4a91d6901ca60fcb15ba6032

  return (
    <ScrollView style={{ marginTop: 20 }}>
      <Input
        onChangeText={(text) => setTitle(text)}
        placeholder="Plan Title"
        keyboardType="text"
        value={title}
      />
      <Input
        onChangeText={(text) => setDesc(text)}
        placeholder="Plan Description"
        keyboardType="text"
        value={desc}
      />

<<<<<<< HEAD
    const handleExercise = () => {
        setExercises((exercises) => [...exercises, exercise]);
        setExercise({
            id: uuidv4(),
            name: "",
            sets: "",
            reps: "",
        });
    };

    const removeExercise = (id) => {
        setExercises((exercises) =>
            exercises.filter((exercise) => exercise.id !== id)
        );
    };
    console.log(exercises)

    return (
        <ScrollView>
            <Input
                onChangeText={(text) => setTitle(text)}
                placeholder="Plan Title"
                keyboardType="text"
                value={title}
            />
            <Input
                onChangeText={(text) => setDesc(text)}
                placeholder="Plan Description"
                keyboardType="text"
                value={desc}
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
                        build={true}
                        removeExercise={removeExercise}
                    />
                ))}
            </ScrollView>

            <Button onPress={handleExercise} title="Add Exercise" />
            <Button onPress={handleSubmit} title="Submit Plan" />
        </ScrollView>
    );
=======
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
          <ExerciseCard key={exercise.name + new Date()} exercise={exercise} />
        ))}
      </ScrollView>

      <Button onPress={handleExercise} title="Add Exercise" />
      <Button onPress={handleSubmit} title="Submit Plan" />
    </ScrollView>
  );
>>>>>>> 95a883f7df8f4dca4a91d6901ca60fcb15ba6032
};

export default BuildPlanScreen;

const styles = StyleSheet.create({});
