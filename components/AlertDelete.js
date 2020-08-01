import { Alert } from "react-native";

export const AlertDelete = (props) =>
    Alert.alert(
        "Delete item from list",
        "Please OK if you like to proceed or CANCEL to go back",
        [
            {
                text: "CANCEL",
                onPress: () => {},
                style: "cancel",
            },
            {
                text: "OK",
                onPress: () => props.onDelete(props.id),
                style: "destructive",
            },
        ],
        { cancelable: false }
    );
