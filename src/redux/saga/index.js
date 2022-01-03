import {all} from "redux-saga/effects";
import {usersWatcher} from "./usersSaga";
import {profileWatchers} from "./profileSaga";

export function* rootWatcher() {
    yield all([usersWatcher(), profileWatchers()])
}