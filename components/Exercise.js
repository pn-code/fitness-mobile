import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Exercise = ({ name, weight, sets, reps }) => {
    return (
        <View style={styles.exercise}>
            <Text style={styles.text}>
                {name} @ {weight} lbs
            </Text>
            <Text style={styles.text}>
                {sets} x {reps}
            </Text>
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
