import { StyleSheet, View, ScrollView } from "react-native";
import { Button, Text } from "@rneui/base";
import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase/firebase";
import { getDocs, query, collection, where } from "firebase/firestore";
import PlanCard from "../components/PlanCard";

const MyPlansScreen = ({ navigation }) => {
    const [plans, setPlans] = useState([]);

    const q = query(collection(db, "plans"), where("userId", "==", auth.currentUser.uid ));

    // Set Plans to Plans Created by User
    useEffect(() => {
        const getSnapshot = async () => {
            const snapshot = await getDocs(q)

            const snapshotPlans = [];
            snapshot.forEach((doc) => {
                snapshotPlans.push(doc.data());
            });
            if (snapshotPlans.length > 0) {
                setPlans(snapshotPlans);
            }
        }
        getSnapshot();

        return getSnapshot;
    },[]);

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
