import { createStore } from "redux";
import reducer from "./reducer";

const initialState = {
    currencyData: [],
    updatedAt: "",
};
const store = createStore(reducer, initialState);

export default store;