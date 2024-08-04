import { combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import { configureStore } from "@reduxjs/toolkit";
import tabReducer from './reducers/tabReducer'
import storage from 'redux-persist/lib/storage';
import { thunk } from "redux-thunk";
import postsReducer from "./reducers/postReducer";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
	auth: authReducer,
	// tab: tabReducer,
	post: postsReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunk),
})

export const persitor = persistStore(store)

export default store

export type AppDispatch = typeof store.dispatch