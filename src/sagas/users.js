import { call, put, all, takeLatest } from "redux-saga/effects";
import * as usersActions from "../actions/users";
import {Api} from "../api";

function* postNewUser(action) {
  try {
    const res = yield call(Api.users.postNewUser, action.payload);
    yield put({type: usersActions.POST_NEW_USER_SUCCESS, payload: res.data});
    localStorage.setItem('user', JSON.stringify(res.data));
  } catch (err) {
    yield put({ type: usersActions.POST_NEW_USER_FAIL, payload: { error: err.message } });
  }
}

function* postLoginUser(action) {
  try {
    const res = yield call(Api.users.postLoginUser, action.payload);
    yield put({type: usersActions.POST_LOGIN_USER_SUCCESS, payload: res.data});
    localStorage.setItem('user', JSON.stringify(res.data));
  } catch (err) {
    yield put({ type: usersActions.POST_LOGIN_USER_FAIL, payload: { error: err.message } });
  }
}

function* postHeaderUser(action) {
  try {
    const res = yield call(Api.users.postHeaderUser, action.payload);
    yield put({type: usersActions.POST_HEADER_SUCCESS, payload: null});
    localStorage.removeItem('user');
  } catch (err) {
    yield put({ type: usersActions.POST_HEADER_FAIL, payload: { error: err.message } });
  }
}

export default all([
  takeLatest(usersActions.POST_NEW_USER_REQUEST, postNewUser),
  takeLatest(usersActions.POST_LOGIN_USER_REQUEST, postLoginUser),
  takeLatest(usersActions.POST_HEADER_REQUEST, postHeaderUser),
])
