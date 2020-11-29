import React, { useState, useEffect, useCallback     } from "react";
import { View, FlatList, Text, ActivityIndicator } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { SetCurrencyList } from "../../redux/actions";
import CurrencyCard from "../../components/CurrencyCard";
import OurTextButton from "../../components/OurTextButton";
import useFetch from "../../networkHandler";
import styles from "./styles";

const SECONDS_IN_DAY = 86400;

const formatDate = (date) => {
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
}
const getDate = () => {
    const date = new Date();
    const today = formatDate(date);

    // Да простят меня Боги кода
    date.setDate(date.getDate() + 1);
    const tomorrow = formatDate(date);
    date.setDate(date.getDate() - 2); 
    const yesterday = formatDate(date);

    return [today, tomorrow, yesterday];
}

const MainPage = (props) => {
    const state = useSelector(state=>state);
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [today, tomorrow, yesterday] = getDate();

    const onSuccessFetch = (data) => {
        dispatch(SetCurrencyList(data.rates, today));
    };
    const fetchData = useCallback(async () => {
        setLoading(true);
        setError(false);

        try {
            const response = await fetch(`https://api.exchangeratesapi.io/history?start_at=${yesterday}&end_at=${tomorrow}&base=RUB`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });

            let data;
            try {
                data = await response.json();
            } catch(err) {
                setError(err);
            }
            onSuccessFetch(data);
            setLoading(false);
        } catch(Error) {
            setError(Error);
        }
    });

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <View style={styles.mainContainer}>
            {
                !loading && !error ?
                    <View style={styles.currencyListContainer}>
                        <FlatList   style={styles.currencyListContainer}
                                    contentContainerStyle={styles.flatlistContainer}
                                    data={Object.entries(state.currencyData[today] || {})}
                                    renderItem={({item, index}) => <CurrencyCard currency={item[0]} rateToday={item[1]} rateTomorrow={state.currencyData[tomorrow][item[0]]} rateYesterday={state.currencyData[yesterday][item[0]]} /> }
                                    keyExtractor={(item, index)=> String(index)} />
                    </View>
                :
                    loading && !error ?
                        <View style={styles.loading}>
                            <ActivityIndicator color={"#595959dd"} size={"large"}/>
                        </View>
                    :
                        <View style={styles.loading}>
                            <Text style={styles.errorText}>Произошла ошибка при получении данных с сервера.</Text>
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