import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "@rneui/base";

const LearnHomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Select a subject...</Text>
            <View>
                <Button
                    onPress={() => navigation.navigate("Fitness")}
                    title="Fitness"
                />
            </View>
            <View>
                <Button
                    onPress={() => navigation.navigate("Nutrition")}
                    title="Nutrition"
                />
            </View>
        </View>
    );
};

export default LearnHomeScreen;

const styles = StyleSheet.create({
    container: {},
    header: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 20,
    },
});
