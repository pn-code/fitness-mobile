import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, Image } from "@rneui/base";
import { auth } from "../firebase/firebase";

const ProfileScreen = ({ navigation }) => {
  const { currentUser: user } = auth;

  const signOutUser = () => {
    auth.signOut().then(() => {
      navigation.replace("Login");
    });
  };

  return (
    <View style={styles.container}>
      {/* Profile Header */}
      <View style={styles.header}>
        <Image
          style={{ width: 80, height: 80, borderRadius: 50 }}
          source={{ uri: user.photoURL }}
        />
        <Text style={styles.headerText}>{user.displayName}</Text>
      </View>

      {/* Description */}
      <View style={styles.desc}>
        <Text>Description</Text>
      </View>

      {/* User Log Out */}
      <View>
        <Button style={{ width: 120 }} onPress={signOutUser} title="Log Out" />
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  header: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    gap: 20,
    borderBottomColor: "gray",
    borderBottomWidth: 2,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  desc: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
});
