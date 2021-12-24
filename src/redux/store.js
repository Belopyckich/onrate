import { applyMiddleware, combineReducers, createStore } from "redux";
import userReducer from "./reducer/userReducer";
import photoReducer from "./reducer/photoReducer";
import thunkMiddleware from "redux-thunk";

const rootReducer = combineReducers({
    users: userReducer,
    photos: photoReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));