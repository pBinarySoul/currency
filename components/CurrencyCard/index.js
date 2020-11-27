import React from "react";
import { View, Text } from "react-native";
import currencyList from "../../currencyList";
import styles from "./styles";

const CurrencyCard = (props) => {
	const { currency } = props;
	
	return (
		<View style={styles.mainContainer}>
			<View style={styles.container}>
				<Text style={styles.textBig}>{currencyList[currency[0]] || currency[0]}</Text>
				<Text style={styles.textMedium}>{currency[0]}</Text>
			</View>
			<View style={styles.container}>
				<View style={styles.leftContainer}>
					<Text style={styles.textMedium}>ЦБ на сегодня</Text>
					<View style={styles.currencyContainer}>
						<Text style={styles.textBig}>{ (1 / currency[1]).toFixed(2) }</Text>
						<Text style={styles.textSmall}>{ (currency[1]).toFixed(4) }</Text>
					</View>
				</View>
			</View>
		</View>
	);
};

export default CurrencyCard;