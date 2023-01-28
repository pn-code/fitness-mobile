import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "@rneui/base";

const LearnNutritionScreen = ({ navigation }) => {
    return (
        <View>
            <Button
                onPress={() => navigation.navigate("Home")}
                title="Back"
            />
            <Text>LearnNutritionScreen</Text>
        </View>
    );
};

export default LearnNutritionScreen;

const styles = StyleSheet.create({});
