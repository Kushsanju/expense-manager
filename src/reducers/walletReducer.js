import { DELETE_WALLET, GET_TRANSACTIONS, GET_WALLET, GET_WALLETS } from "../actions/types";
const initialState = {
    wallets: [],
    wallet: "",
    transactions: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_WALLETS:
            return { ...state, wallets: action.payload };
        case GET_TRANSACTIONS:
            return { ...state, transactions: action.payload }
        case GET_WALLET:
            return { ...state, wallet: action.payload }
        case DELETE_WALLET:
            return { ...state, wallets: state.wallets.filter(x => x.id !== action.payload) }
        default:
            return state;
    }
}