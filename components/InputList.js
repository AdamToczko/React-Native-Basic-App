import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    ScrollView,
} from "react-native";

export const InputList = () => {
    const [enteredItem, setEnteredItem] = useState("");
    const [listItems, setListItems] = useState([]);

    const inputHandler = (enteredText) => {
        setEnteredItem(enteredText);
    };

    const addListHandler = () => {
        setListItems((currentList) => [...currentList, enteredItem]);
    };

    return (
        <View>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Add Item to list"
                    style={styles.input}
                    onChangeText={inputHandler}
                    value={enteredItem}
                />
                <Button title="ADD" onPress={addListHandler} />
            </View>
            <ScrollView>
                {listItems.map((listItem) => (
                    <Text key={listItem}>{listItem}</Text>
                ))}
            </ScrollView>
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
        width: "80%",
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
    },
});
