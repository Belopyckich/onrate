import {put, call, takeEvery} from "redux-saga/effects";
import {rawgApi} from "../../api/api";
import {setGames, FETCH_GAMES} from "../reducer/gamesReducer";
import { SET_PROFILE } from "../reducer/profileReducer";

function* fetchGamesWorker() {
    const games = yield call(rawgApi.fetchGamesByPage)
    yield put(setGames(games))
}

export function* GamesWatcher() {
    yield takeEvery(SET_PROFILE, fetchGamesWorker)
}