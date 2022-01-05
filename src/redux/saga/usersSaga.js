import {put, takeEvery, call} from "redux-saga/effects";
import {randomuserApi} from "../../api/api";
import { addUsers } from "../reducer/usersReducer";
import {SET_PROFILE} from "../reducer/profileReducer";
function* fetchUserWorker() {
    const users = yield call(randomuserApi.fetchUsers);
    yield put(addUsers(users))
}

export function * usersWatcher() {
    yield takeEvery(SET_PROFILE, fetchUserWorker)
}