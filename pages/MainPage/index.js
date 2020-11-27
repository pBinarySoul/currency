import React from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";

const CurrencyPage = (props) => {
	const state = useSelector(state=>state);
	
	return (
		<Text>HELLO</Text>
	);
};

export default CurrencyPage;