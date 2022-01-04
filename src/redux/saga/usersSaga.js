import {put, takeEvery, call} from "redux-saga/effects";
import {api} from "../../api/api";
import {addUsers, FETCH_USERS} from "../reducer/usersReducer";
import {SET_PROFILE} from "../reducer/profileReducer";
function* fetchUserWorker() {
    const users = yield call(api.fetchUsers);
    console.log(users);
    yield put(addUsers(users))
}

export function * usersWatcher() {
    yield takeEvery(SET_PROFILE, fetchUserWorker)
}