import { SET_PROFILE, SET_PROFILE_PHOTO } from "../reducer/profileReducer";
import {api} from "../../api/api";
import {call, put, takeEvery} from "redux-saga/effects";

function* fetchProfilePhotoWorker() {
    const data = yield call(api.fetchPhoto);
    yield put(SET_PROFILE_PHOTO(data));
}

export function* profileWatchers() {
    yield takeEvery(SET_PROFILE, fetchProfilePhotoWorker)
}