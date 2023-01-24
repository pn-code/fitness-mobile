import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button, Input, Image } from "@rneui/base";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                navigation.replace("Home");
            }
        });

        return unsubscribe;
    }, []);

    const signIn = () => {};

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light" />

            <Image
                source={{
                    uri: "https://icon-library.com/images/strength-icon/strength-icon-0.jpg",
                }}
                style={{ width: 200, height: 200 }}
            />
            <View style={styles.inputContainer}>
                <Input
                    placeholder="Email"
                    autoFocus
                    type="Email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Input
                    placeholder="Password"
                    secureTextEntry
                    type="password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
            </View>
            <Button
                onPress={signIn}
                containerStyle={styles.button}
                title="Login"
            />
            <Button
                onPress={() => navigation.navigate("Register")}
                containerStyle={styles.button}
                type="outline"
                title="Register"
            />
            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
    },
    inputContainer: {
        width: 300,
    },
    button: {
        width: 200,
        marginTop: 10,
    },
});
