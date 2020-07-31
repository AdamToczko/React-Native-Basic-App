import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { AddingImage } from "./components/AddingImage";
import { InputList } from "./components/InputList";
import { ShowList } from "./components/ShowList";

export default function App() {
    const [listItems, setListItems] = useState([]);
    const [addMode, setAddMode] = useState(false);

    const addListHandler = (item) => {
        setListItems((currentList) => [
            ...currentList,
            { id: Math.random().toString(), value: item },
        ]);
        setAddMode(false);
    };
    const removeListItem = (index) => {
        setListItems((currentList) => {
            return currentList.filter((element) => element.id !== index);
        });
    };

    const cancelListAddHandler = () => {
        setAddMode(false);
    };

    return (
        <View style={styles.container}>
            <View>
                <AddingImage />
                <Text style={styles.text}>Below you can make a Todo list</Text>
            </View>
            <Button title="Add New Item" onPress={() => setAddMode(true)} />
            <InputList
                visible={addMode}
                onAddListItem={addListHandler}
                onCancel={cancelListAddHandler}
            />
            <FlatList
                keyExtractor={(item, index) => item.id}
                data={listItems}
                renderItem={(itemData) => (
                    <View style={styles.list}>
                        <ShowList
                            id={itemData.item.id}
                            listItem={itemData.item.value}
                            onDelete={removeListItem}
                        />
                    </View>
                )}
            />

            <StatusBar style="auto" />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: " rgb(250,250,250)",
        alignItems: "center",
        width: "90%",
        marginLeft: "5%",
    },
    text: {
        textAlign: "center",
        paddingBottom: 10,
        fontSize: 20,
    },
    list: {
        padding: 5,
    },
});
