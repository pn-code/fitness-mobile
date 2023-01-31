import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button, Input, Image } from "@rneui/base";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.replace("Home");
      }
    });
  });

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .then(() => navigation.replace("Home"))

      .catch((error) => {
        if (error.code === "auth/wrong-password") {
          setError("Wrong Password");
        } else if (error.code === "auth/user-not-found") {
          setError("No User Found");
        } else if (error.code === "auth/invalid-email") {
          setError("Invalid Email");
        } else {
          console.log(`${error.code}: ${error.message}`);
        }
      });
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      {error && <Text style={styles.error}>{error}</Text>}
      <View style={{ height: 100 }}></View>
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
      <Button onPress={signIn} containerStyle={styles.button} title="Login" />
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
  error: {
    color: "red",
    fontWeight: "bold",
  },
});
