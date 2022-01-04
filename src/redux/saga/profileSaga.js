import { FETCH_PROFILE_PHOTO, SET_PROFILE, setProfilePhoto } from "../reducer/profileReducer";
import {api} from "../../api/api";
import {call, put, takeEvery} from "redux-saga/effects";

function* fetchProfilePhotoWorker() {
    const data = yield call(api.fetchPhoto);
    yield put(setProfilePhoto(data));
}

export function* profileWatchers() {
    yield takeEvery(SET_PROFILE, fetchProfilePhotoWorker)
    yield takeEvery(FETCH_PROFILE_PHOTO, fetchProfilePhotoWorker)
}