import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer: {
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100%",
    },
    loading: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    errorText: {
        fontSize: 24,
        textAlign: "center",
        marginBottom: 64,
    },
    currencyListContainer: {
        width: "100%",
    },
    flatlistContainer: {
        paddingHorizontal: 16,
        paddingBottom: 64,
    },
    bottomContainer: {
        position: "absolute",
        bottom: 0,
        marginBottom: 24,
    },
    updateButton: {
        width: 220,
        height: 48,
        borderRadius: 24,
        justifyContent: "center",
        alignItems: "center",
    },
    updateButtonText: {

    }
});

export default styles;