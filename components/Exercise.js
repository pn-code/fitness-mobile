import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "@rneui/base";

const Exercise = ({ id, date, name, weight, sets, reps, edit, deleteExercise }) => {
    return (
        <View style={styles.container}>
            <View style={styles.exercise}>
                <Text style={styles.text}>
                    {name} @ {weight} lbs
                </Text>
                <Text style={styles.text}>
                    {sets} x {reps}
                </Text>
            </View>
            {edit && <View>
                <Button onPress={() => deleteExercise(id, date)} color="red" title="X"/>
            </View>}
        </View>
    );
};

export default Exercise;

const styles = StyleSheet.create({
    exercise: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    text: {
        fontSize: 18,
        marginBottom: 6,
    },
});
