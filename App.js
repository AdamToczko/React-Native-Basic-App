import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: "https://picsum.photos/id/237/200/300" }}
            />
            <Text style={styles.text}>
                To share a photo from your phone {"\n"} with a friend, just
                press the button below!
            </Text>
            <TouchableOpacity
                onPress={() => alert("Pick again !")}
                style={{ marginTop: 20, backgroundColor: "#56CCF2" }}
            >
                <Text style={{ fontSize: 20, color: "#fff" }}>
                    Pick a photo
                </Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: " rgb(250,250,250)",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingBottom: 10,
    },
    image: {
        marginTop: 40,
        marginBottom: 20,
        width: 200,
        height: 200,
    },
    text: {
        textAlign: "center",
        fontSize: 20,
    },
});
