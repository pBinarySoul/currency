import { createStore } from "redux";
import reducer from "./reducer";

const initialState = {
    currencyData: [],
};
const store = createStore(reducer, initialState);

export default store;