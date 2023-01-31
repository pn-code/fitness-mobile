import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "@rneui/base";

const LearnHomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Select a subject...</Text>
            <View style={styles.btnContainer}>
                <Button
                    titleStyle={styles.btnTitle}
                    buttonStyle={styles.btn}
                    color="blue"
                    onPress={() => navigation.navigate("Fitness")}
                    title="Fitness"
                />
                <Button
                    titleStyle={styles.btnTitle}
                    buttonStyle={styles.btn}
                    color="red"
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
    btnContainer: {
        marginTop: 50,
        alignItems: "center",
        justifyContent: "space-evenly",
        gap: 100,
    },
    btn: {
        borderRadius: 20,
        width: 300,
        height: 120,
    },
    btnTitle: {
        fontSize: 24,
        fontWeight: "bold",
    },
});
