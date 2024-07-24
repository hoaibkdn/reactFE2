import { combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import { configureStore } from "@reduxjs/toolkit";
import tabReducer from './reducers/tabReducer'
import { thunk } from "redux-thunk";
import postsReducer from "./reducers/postReducer";


const rootReducer = combineReducers({
	auth: authReducer,
	tab: tabReducer,
	post: postsReducer
})

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunk),
})

export default store

export type AppDispatch = typeof store.dispatch