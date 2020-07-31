import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";

export const AddingImage = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();

        if (pickerResult.cancelled === true) {
            return;
        }
        setSelectedImage({ localUri: pickerResult.uri });
    };

    return (
        <View style={styles.container}>
            {selectedImage !== null ? (
                <Image
                    source={{ uri: selectedImage.localUri }}
                    style={styles.image}
                />
            ) : (
                <Image
                    style={styles.image}
                    source={{ uri: "https://picsum.photos/id/237/300/300" }}
                />
            )}
            <Text style={styles.text}>
                To share a photo from your phone, {"\n"} just press the button
                below!
            </Text>
            <TouchableOpacity
                onPress={openImagePickerAsync}
                style={{ marginTop: 20, backgroundColor: "#56CCF2" }}
            >
                <Text style={{ fontSize: 20, color: "#fff" }}>
                    Pick a photo
                </Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: " rgb(250,250,250)",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingBottom: 10,
        width: "100%",
    },
    image: {
        marginTop: 40,
        marginBottom: 20,
        width: 200,
        height: 200,
        resizeMode: "contain",
    },
    text: {
        textAlign: "center",
        fontSize: 20,
    },
});
