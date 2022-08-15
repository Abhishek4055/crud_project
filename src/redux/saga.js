import { GET_USER, GET_CREATE_USER, DELETE_USER, UPDATE_USER } from "./type";
import {
  takeEvery,
  takeLatest,
  put,
  call,
  delay,
  fork,
  take,
} from "redux-saga/effects";
import {
  getUserApi,
  createUserApi,
  deleteUserApi,
  updateUserApi,
} from "./service";
import {
  getUserError,
  setUser,
  setCreateUser,
  getCreateUserError,
  deleteUserError,
  deleteUserSuccess,
  updateUserSuccess,
  updateUserError,
} from "./action";

// render use rList
function* getUserSagaCallAPI() {
  try {
    const response = yield call(getUserApi);
    if (response.status === 200) {
      yield put(setUser(response.data));
    }
  } catch (error) {
    yield put(getUserError(error.response.data));
  }
}

//create user List
function* getCreateUserSagaCallAPI({ payload }) {
  try {
    const response = yield call(createUserApi, payload);
    if (response.status === 200) {
      yield delay(500);
      yield put(setCreateUser(response.data));
    }
  } catch (error) {
    yield put(getCreateUserError(error.response.data));
  }
}

// delete User
function* deleteUserSagaCallAPI(userId) {
  try {
    const response = yield call(deleteUserApi, userId);
    if (response.status === 200) {
      yield delay(500);
      yield put(deleteUserSuccess(userId));
    }
  } catch (error) {
    yield put(deleteUserError(error.response.data));
  }
}

// update User
function* updateUserSagaCallAPI({ payload: { id, formState } }) {
  // console.log(payload);
  try {
    const response = yield call(updateUserApi, id, formState);
    if (response.status === 200) {
      yield delay(500);
      yield put(updateUserSuccess());
    }
  } catch (error) {
    yield put(updateUserError(error.response.data));
  }
}

// watcher saga
function* userWatcherSaga() {
  yield takeEvery(GET_USER, getUserSagaCallAPI);
}

function* createUserWatcherSaga() {
  yield takeLatest(GET_CREATE_USER, getCreateUserSagaCallAPI);
}

function* deleteUserWatcherSaga() {
  while (true) {
    const { payload: userId } = yield take(DELETE_USER);
    yield call(deleteUserSagaCallAPI, userId);
  }
}

function* updateUserWatcherSaga() {
  yield takeLatest(UPDATE_USER, updateUserSagaCallAPI);
}

//manage the concurrency between saga
export const userSagas = [
  fork(userWatcherSaga),
  fork(createUserWatcherSaga),
  fork(deleteUserWatcherSaga),
  fork(updateUserWatcherSaga),
];
