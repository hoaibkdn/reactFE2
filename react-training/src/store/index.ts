import { combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import { configureStore } from "@reduxjs/toolkit";
import tabReducer from './reducers/tabReducer'


const rootReducer = combineReducers({
	auth: authReducer,
	tab: tabReducer
})

const store = configureStore({
	reducer: rootReducer
})

export default store