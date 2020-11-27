import { ACTION_TYPE_SET_CURRENCY_LIST } from "./types";

export const SetCurrencyList = (data, date) => {
    return { type: ACTION_TYPE_SET_CURRENCY_LIST, data, date };
};