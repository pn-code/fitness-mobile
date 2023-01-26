import { StyleSheet, View } from "react-native";
import { Button, Text } from "@rneui/base";
import React from "react";

const MyPlansScreen = ({ navigation }) => {
    return (
        <View>
            <Text>You currently have no plans</Text>
            <Button title="Build Plan" onPress={() => navigation.navigate("Build Plan")}/>
            <Button title="Add Existing Plan" onPress={() => navigation.navigate("Add Plan")}/>
        </View>
    );
};

export default MyPlansScreen;

const styles = StyleSheet.create({});
