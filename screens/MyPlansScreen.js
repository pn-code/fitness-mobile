import { StyleSheet, View, ScrollView } from "react-native";
import { Button, Text } from "@rneui/base";
import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase/firebase";
import { onSnapshot, query, collection } from "firebase/firestore";
import PlanCard from "../components/PlanCard";

const MyPlansScreen = ({ navigation }) => {
    const [plans, setPlans] = useState([]);

    const q = query(collection(db, "users", auth.currentUser.uid, "plans"));

    useEffect(() => {
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const snapshotPlans = [];
            snapshot.forEach((doc) => {
                snapshotPlans.push(doc.data());
            });
            if (snapshotPlans.length > 0) {
                setPlans(snapshotPlans);
            }
        });
        return unsubscribe;
    });

    return (
        <View style={styles.container}>
            {plans.length === 0 ? (
                <Text>You currently have no plans</Text>
            ) : (
                <ScrollView style={styles.scrollView}>
                    {plans.map((plan) => (
                        <PlanCard key={plan.id} plan={plan} />
                    ))}
                </ScrollView>
            )}

            <Button
                title="Build Plan"
                onPress={() => navigation.navigate("Build Plan")}
            />
            <Button
                title="Add Existing Plan"
                onPress={() => navigation.navigate("Add Plan")}
            />
        </View>
    );
};

export default MyPlansScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        marginHorizontal: 20,
    },
});
