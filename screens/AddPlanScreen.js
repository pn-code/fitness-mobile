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
            <Text style={styles.desc}>
                Here, you can view other's submitted plans.
            </Text>
            <ScrollView style={styles.scrollView}>
                {/* Render Individual Plan Components Here */}
                {plans.length > 0 ? (
                    plans.map((plan) => <PlanCard key={plan.id} plan={plan} />)
                ) : (
                    <Text style={styles.text}>
                        Currently, there are no other plans available...
                    </Text>
                )}
            </ScrollView>
        </View>
    );
};

export default AddPlanScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    desc: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: 700,
        borderBottomWidth: 1,
        borderBottomColor: "black",
        marginVertical: 10,
        paddingBottom: 10,
    },
    text: {
        textAlign: "center",
        fontSize: 16,
        color: "gray",
        fontWeight: "bold",
    },
    scrollView: {
        marginHorizontal: 20,
    },
});
