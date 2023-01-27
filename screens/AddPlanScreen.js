import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import PlanCard from "../components/PlanCard";
import { auth, db } from "../firebase/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

const AddPlanScreen = () => {
    const [plans, setPlans] = useState([]);

    const q = query(
        collection(db, "plans"),
        where("userId", "!=", auth.currentUser.uid)
    );

    // Set Plans to Plans Created by User
    useEffect(() => {
        const getSnapshot = async () => {
            const snapshot = await getDocs(q);

            const snapshotPlans = [];
            snapshot.forEach((doc) => {
                snapshotPlans.push(doc.data());
            });
            if (snapshotPlans.length > 0) {
                setPlans(snapshotPlans);
            }
        };
        getSnapshot();

        return getSnapshot;
    }, []);

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {/* Render Individual Plan Components Here */}
                {plans.map((plan) => (
                    <PlanCard key={plan.id} plan={plan} />
                ))}
            </ScrollView>
        </View>
    );
};

export default AddPlanScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        marginHorizontal: 20,
    },
});
