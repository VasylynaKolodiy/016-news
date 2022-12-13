import { call, put, all, takeLatest } from "redux-saga/effects";
import * as profilesActions from "../actions/profiles";
import {Api} from "../api";

function* getProfile(action) {
  try {
    const res = yield call(Api.profiles.getProfile, action.payload);
    yield put({type: profilesActions.GET_PROFILE_SUCCESS, payload: res.data.profile});
  } catch (err) {
    yield put({ type:profilesActions.GET_PROFILE_FAIL, payload: { error: err.message } });
  }
}

function* follow(action) {
  try {
    const res = yield call(Api.profiles.follow, action.payload);
    yield put({type: profilesActions.FOLLOW_SUCCESS, payload: res.data.profile});
  } catch (err) {
    yield put({ type:profilesActions.FOLLOW_FAIL, payload: { error: err.message } });
  }
}

function* unfollow(action) {
  try {
    const res = yield call(Api.profiles.unfollow, action.payload);
    console.log(res.data, 'res.data')
    yield put({type: profilesActions.UNFOLLOW_SUCCESS, payload: res.data.profile});
  } catch (err) {
    yield put({ type:profilesActions.UNFOLLOW_FAIL, payload: { error: err.message } });
  }
}

export default all([
  takeLatest(profilesActions.GET_PROFILE_REQUEST, getProfile),
  takeLatest(profilesActions.FOLLOW_REQUEST, follow),
  takeLatest(profilesActions.UNFOLLOW_REQUEST, unfollow),
])
