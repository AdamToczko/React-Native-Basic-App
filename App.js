import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { AddingImage } from "./components/AddingImage";

export default function App() {
    return (
        <View style={styles.container}>
            <AddingImage />
            <Text>Hello</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: " rgb(250,250,250)",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingBottom: 10,
    },
});
