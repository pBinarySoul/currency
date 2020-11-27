import React from "react";
import { Text, View, Image } from "react-native";
import OurTextButton from "../../components/OurTextButton";
import styles from "./styles";

const splash = require("../../assets/android-splash-img.png");

const CurrencyPage = (props) => {
	const { navigation } = props;

	const goToCurrencyPage = (e) => {
		navigation.navigate("CurrencyPage");
	};
	return (
		<View style={styles.mainContainer}>
			<View style={styles.topContainer}>
				<Text style={styles.title}>Добрый день!</Text>
				<Text style={styles.text}>Для начала работы нажмите на кнопку Загрузить котировки</Text>
			</View>
			<View style={styles.middleContainer}>
				<Image style={styles.splashImage} source={splash} />
			</View>
			<View style={styles.bottomContainer}>
				<OurTextButton style={{width: 210}} onPress={goToCurrencyPage}>Загрузить котировки</OurTextButton>
			</View>
		</View>
	);
};

export default CurrencyPage;