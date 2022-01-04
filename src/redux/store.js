import { applyMiddleware, combineReducers, createStore } from "redux";
import usersReducer from "./reducer/usersReducer";
import profileReducer from "./reducer/profileReducer";
import createSagaMiddleware from "@redux-saga/core";
import { rootWatcher } from "./saga";

const sagaMiddleware = createSagaMiddleware();


const rootReducer = combineReducers({
    users: usersReducer,
    profile: profileReducer,
})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
        applyMiddleware(sagaMiddleware)
    )
);

sagaMiddleware.run(rootWatcher);