import { combineReducers } from 'redux'
import errorReducer from './errorReducer';
import transactionReducer from './transactionReducer';
import walletReducer from './walletReducer';

export default combineReducers({
    errors: errorReducer,
    wallet: walletReducer,
    transaction: transactionReducer
});