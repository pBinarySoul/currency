import { ACTION_TYPE_SET_CURRENCY_LIST } from "./types";

const reducer = (state, action) => {
    switch (action.type) {
        case ACTION_TYPE_SET_CURRENCY_LIST: {
            const newState = {...state};
            const [data, date] = [action.data, action.date];

            if ( data ) {
                try {
                    delete data[date].RUB; // Удаляем рубль, чтобы он не появлялся в списке
                } catch {}
                newState.currencyData = data;
                newState.updatedAt = date;
            }

            return newState;
        }
        default:
            return state;
    }
};

export default reducer;