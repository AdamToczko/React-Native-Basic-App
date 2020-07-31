import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { AddingImage } from "./components/AddingImage";
import { InputList } from "./components/InputList";
import { ShowList } from "./components/ShowList";

export default function App() {
    const [listItems, setListItems] = useState([]);

    const addListHandler = (item) => {
        setListItems((currentList) => [...currentList, item]);
    };
    return (
        <View style={styles.container}>
            <View>
                <AddingImage />
                <Text style={styles.text}>Below you can make a Todo list</Text>
            </View>

            <InputList onAddListItem={addListHandler} />
            <ScrollView style={styles.scroll}>
                <ShowList listItems={listItems} />
            </ScrollView>

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
    },
});
