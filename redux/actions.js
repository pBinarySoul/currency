import { ACTION_TYPE_SET_CURRENCY_LIST } from "./actions";

export const SetCurrencyList = (data) => {
    return { type: ACTION_TYPE_SET_CURRENCY_LIST, payload: data };
};