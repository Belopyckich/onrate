import {all} from "redux-saga/effects";
import {usersWatcher} from "./usersSaga";
import {profileWatchers} from "./profileSaga";
import { GamesWatcher } from "./gamesSaga";

export function* rootWatcher() {
    yield all([usersWatcher(), profileWatchers(), GamesWatcher()])
}