import { createStore } from 'redux'
import storeReducer from '../reducers/reducer'


const initialState = []


const store = createStore(storeReducer, initialState)

export default store;