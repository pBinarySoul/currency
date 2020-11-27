import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	mainContainer: {
		backgroundColor: "#fff",
		padding: 16,
		marginVertical: 20,
		borderRadius: 2,

        // iOS shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        // Android shadow
        elevation: 5,
	},
	container: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingVertical: 12,
	},
	leftContainer: {
		justifyContent: "space-between",
	},
	currencyContainer: {
		flexDirection: "row",
		alignItems: "flex-end",
		justifyContent: "space-between",
	},
	textBig: {
		color: "#000d",
		fontSize: 20,
	},
	textMedium: {
		color: "#595959dd",
		fontSize: 16,
	},
	textSmall: {
		color: "#595959dd",
		fontSize: 14,
	},
	green: {
		color: "#21a700"
	},
	red: {
		color: "#e20000"
	},
});

export default styles;