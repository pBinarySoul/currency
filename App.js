import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { enableScreens } from "react-native-screens";
import store from "./redux/store";
import AppStackNavigator from "./Nav";

enableScreens();

const App = (props) => {

    return (
        <Provider store={store}>
            <NavigationContainer>
                <AppStackNavigator />
            </NavigationContainer>
        </Provider>
    );
};

export default App;