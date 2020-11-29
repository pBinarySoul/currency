import React from "react";
import { View, Text } from "react-native";
import currencyList from "../../currencyList";
import styles from "./styles";

const CurrencyCard = (props) => {
	const { currency, rateToday, rateTomorrow, rateYesterday } = props;
	const costYesterday = 1 / rateYesterday;
	const costToday = 1 / rateToday;
	const costTomorrow = 1 / rateTomorrow;

	return (
		<View style={styles.mainContainer}>
			<View style={styles.container}>
				<Text style={styles.textBig}>{currencyList[currency] || ""}</Text>
				<Text style={styles.textMedium}>{currency}</Text>
			</View>
			<View style={styles.container}>
				<View style={styles.leftContainer}>
					<Text style={styles.textMedium}>ЦБ на сегодня</Text>
					<View style={styles.currencyContainer}>
						<Text style={styles.textBig}>{ costToday.toFixed(2) }</Text>
						<Text style={[styles.textSmall, (costYesterday - costToday) > 0 ? styles.green : styles.red]}>{ (costToday - costYesterday).toFixed(4) }</Text>
					</View>
				</View>
				<View style={styles.rightContainer}>
					<Text style={styles.textMedium}>ЦБ на завтра</Text>
					<View style={styles.currencyContainer}>
						<Text style={styles.textBig}>{ (costTomorrow).toFixed(2) }</Text>
						<Text style={[styles.textSmall, (costToday - costTomorrow) > 0 ? styles.green : styles.red]}>{ (costTomorrow - costToday).toFixed(4) }</Text>
					</View>
				</View>
			</View>
		</View>
	);
};

export default React.memo(CurrencyCard);