import {put, takeEvery, call} from "redux-saga/effects";
import {api} from "../../api/api";
import {addUsers, FETCH_USERS} from "../reducer/userReducer";
function* fetchUserWorker() {
    const data = yield call(api.fetchUsers);
    yield put(addUsers(data))
}

function* removeUserWorker() {

}


export function * usersWatcher() {
    yield takeEvery(FETCH_USERS, fetchUserWorker)
}