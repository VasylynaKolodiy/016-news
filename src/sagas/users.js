import { call, put, all, takeLatest } from "redux-saga/effects";
import * as usersActions from "../actions/users";
import {Api} from "../api";

function* createNewUser(action) {
  try {
    const res = yield call(Api.users.createNewUser, action.payload);
    yield put({type: usersActions.CREATE_NEW_USER_SUCCESS, payload: res.data});
    localStorage.setItem('user', JSON.stringify(res.data.user));
  } catch (err) {
    yield put({ type: usersActions.CREATE_NEW_USER_FAIL, payload: { error: err.message } });
  }
}

function* loginUser(action) {
  try {
    const res = yield call(Api.users.loginUser, action.payload);
    yield put({type: usersActions.LOGIN_USER_SUCCESS, payload: res.data});
    localStorage.setItem('user', JSON.stringify(res.data.user));
  } catch (err) {
    yield put({ type: usersActions.LOGIN_USER_FAIL, payload: err.response.data.errors});
  }
}

export default all([
  takeLatest(usersActions.CREATE_NEW_USER_REQUEST, createNewUser),
  takeLatest(usersActions.LOGIN_USER_REQUEST, loginUser),
])
