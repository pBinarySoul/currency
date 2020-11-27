import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: "#70c1b3",
        paddingVertical: 10,
        paddingHorizontal: 8,
        borderRadius: 2,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    textStyle: {
        color: "#fff",
        fontSize: 16,
        textTransform: "uppercase",
        textAlign: "center",
    },
});

export default styles;