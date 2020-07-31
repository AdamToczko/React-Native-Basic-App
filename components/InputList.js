import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export const InputList = (props) => {
    const [enteredItem, setEnteredItem] = useState("");
    const inputHandler = (enteredText) => {
        setEnteredItem(enteredText);
    };
    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Add Item to list"
                style={styles.input}
                onChangeText={inputHandler}
                value={enteredItem}
            />
            <Button
                title="ADD"
                onPress={() => props.onAddListItem(enteredItem)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    input: {
        width: "75%",
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
        marginRight: 20,
    },
});
