import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { ListItem, ButtonGroup, Avatar, Button } from "@rneui/base";
import { GiWeightLiftingUp } from "react-icons/gi";
import { IoIosNutrition } from "react-icons/io";
import { FaQuestionCircle } from "react-icons/fa";

const Navbar = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <ButtonGroup
            selectedButtonStyle={styles.select}
            selectedIndex={selectedIndex}
            onPress={(value) => {
                setSelectedIndex(value);
            }}
            containerStyle={styles.container}
            buttons={[
                <GiWeightLiftingUp size={50} color={"white"} />,
                <IoIosNutrition size={50} color={"white"} />,
                <FaQuestionCircle size={50} color={"white"} />,
                <Avatar
                    color={"white"}
                    size={50}
                    rounded
                    source={{
                        uri: "https://media.istockphoto.com/id/1313958250/vector/user-avatar-profile-icon-black-vector-illustration-on-transparent-background-website-or-app.jpg?s=612x612&w=0&k=20&c=oGGyxXc1jaRAopcs4ZEkZ1LbtAoQwKp4Q0niLvJNk-o=",
                    }}
                />,
            ]}
        />
    );
};

export default Navbar;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "space-between",
        height: 80,
    },
    select: {
        backgroundColor: "gray",
    },
});