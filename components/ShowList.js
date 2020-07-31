import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export const ShowList = (props) => {
    return (
        <View style={styles.list}>
            {props.listItems.map((listItem) => (
                <View style={styles.listItem}>
                    <Text key={listItem}>{listItem}</Text>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: "center",
        marginRight: 45,
        padding: 10,
    },
    listItem: {
        width: 330,
        padding: 10,
        backgroundColor: "#ccc",
        borderColor: "black",
        borderWidth: 1,
        marginBottom: 10,
    },
});
