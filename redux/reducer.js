import { ACTION_TYPE_SET_CURRENCY_LIST } from "./actions";

const reducer = (state, action) => {
    switch (action.type) {
        case ACTION_TYPE_SET_CURRENCY_LIST: {
            const newState = {...state};

            if ( payload )
                newState.currencyData = payload;

            return newState;
        }
        default:
            return state;
    }
};

export default reducer;