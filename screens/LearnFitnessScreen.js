import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "@rneui/base";

const LearnFitnessScreen = ({ navigation }) => {
    return (
        <View>
            <Button
                onPress={() => navigation.navigate("Home")}
                title="Back"
            />
            <Text>LearnFitnessScreen</Text>
        </View>
    );
};

export default LearnFitnessScreen;

const styles = StyleSheet.create({});
