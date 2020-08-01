import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AlertDelete } from "./AlertDelete";

export const ShowList = (props) => {
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => AlertDelete(props)}
        >
            <View style={styles.listItem}>
                <Text>{props.listItem}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItem: {
        width: 330,
        padding: 10,
        backgroundColor: "#ccc",
        borderColor: "black",
        borderWidth: 1,
        marginBottom: 10,
    },
});
