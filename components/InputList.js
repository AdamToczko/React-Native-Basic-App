import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

export const InputList = (props) => {
    const [enteredItem, setEnteredItem] = useState("");

    const inputHandler = (enteredText) => {
        setEnteredItem(enteredText);
    };

    const addItemHandler = () => {
        props.onAddListItem(enteredItem);
        setEnteredItem("");
    };

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Add Item to list"
                    style={styles.input}
                    onChangeText={inputHandler}
                    value={enteredItem}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title="CANCEL"
                            color="red"
                            onPress={props.onCancel}
                        />
                    </View>
                    <View style={styles.button}></View>
                    <Button title="ADD" onPress={addItemHandler} />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        width: "75%",
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
        marginRight: 20,
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "60%",
    },
    button: {
        width: "40%",
    },
});
