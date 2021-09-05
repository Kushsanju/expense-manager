import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'

const initialState = {}
const middleWare = [thunk]
let store;


store = createStore(rootReducer,
    initialState,
    compose(applyMiddleware(...middleWare)))


export default store;