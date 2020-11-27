import React from "react";
import { View, FlatList, Text, ActivityIndicator } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { SetCurrencyList } from "../../redux/actions";
import CurrencyCard from "../../components/CurrencyCard";
import OurTextButton from "../../components/OurTextButton";
import useFetch from "../../networkHandler";
import styles from "./styles";

const MainPage = (props) => {
    const state = useSelector(state=>state);
    const dispatch = useDispatch();

    const onSuccessFetch = (data) => {
        dispatch(SetCurrencyList(Object.entries(data.rates), data.date));
    };

    const [
        data,
        loading,
        error,
        fetchData,
        abortController
    ] = useFetch("https://api.exchangeratesapi.io/latest?base=RUB", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }, undefined, undefined, onSuccessFetch);
    return (
        <View style={styles.mainContainer}>
            {
                !loading && !error ?
                    <View style={styles.currencyListContainer}>
                        <FlatList   style={styles.currencyListContainer}
                                    contentContainerStyle={styles.flatlistContainer}
                                    data={state.currencyData}
                                    renderItem={({item, index}) => <CurrencyCard currency={item} /> }
                                    keyExtractor={(item, index)=>index} />
                    </View>
                :
                    <View style={styles.loading}>
                        <ActivityIndicator color={"#595959dd"} size={"large"}/>
                    </View>
            }
            <View style={styles.bottomContainer}>
                <OurTextButton  style={styles.updateButton}
                                textStyle={styles.updateButtonText}
                                onPress={()=>{fetchData()}}
                                disabled={loading}>Обновить котировки</OurTextButton>
            </View>
        </View>
    );
};

export default MainPage;