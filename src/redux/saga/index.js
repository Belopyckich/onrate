import {all} from "redux-saga/effects";
import {usersWatcher} from "./usersSaga";

export function* rootWatcher() {
    yield all([usersWatcher()])
}