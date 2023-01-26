import { StyleSheet, Text, ScrollView, View } from "react-native";
import React from "react";
import { Button, Input } from "@rneui/base";

const BuildPlanScreen = () => {
    return (
        <ScrollView>
            <Input placeholder="Plan Name" keyboardType="text" />


            <View>
                <Input placeholder="Exercise Name" keyboardType="text" />
                <Input placeholder="Desired Set Scheme" keyboardType="text" />
                <Input placeholder="Desired Rep Scheme" keyboardType="text" />
            </View>

            <Button title="Add Exercise" />
            <Button title="Submit Plan"/>
        </ScrollView>
    );
};

export default BuildPlanScreen;

const styles = StyleSheet.create({});
