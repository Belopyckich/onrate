import { applyMiddleware, combineReducers, createStore } from "redux";
import userReducer from "./reducer/userReducer";
import photoReducer from "./reducer/photoReducer";
import createSagaMiddleware from "@redux-saga/core";
import { rootWatcher } from "./saga";

const sagaMiddleware = createSagaMiddleware();


const rootReducer = combineReducers({
    users: userReducer,
    photos: photoReducer
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher);