import React from "react";
import { createNativeStackNavigator } from "react-native-screens/native-stack";

import MainPage from "./pages/MainPage";
import CurrencyPage from "./pages/CurrencyPage";

const { Navigator, Screen } = createNativeStackNavigator();

/**
 * Стэк навигация
 */
const AppStackNavigator = () => {
    return (
        <Navigator
            initialRouteName="MainPage"
            backBehavior="history"
            mode="modal"
            headerMode="screen"
            defaultNavigationOptions={{
                tabBarVisible: true,
                headerHideShadow: true,
            }}>
            <Screen
                name="MainPage"
                component={MainPage}/>
            <Screen
                name="CurrencyPage"
                component={CurrencyPage}/>
        </Navigator>
    );
};
export default AppStackNavigator;