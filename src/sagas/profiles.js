import { call, put, all, takeLatest } from "redux-saga/effects";
import * as profilesActions from "../actions/profiles";
import {Api} from "../api";

function* getProfile(action) {
  try {
    const res = yield call(Api.profiles.getProfile, action.payload);
    yield put({type: profilesActions.GET_PROFILE_SUCCESS, payload: res.data});
  } catch (err) {
    yield put({ type:profilesActions.GET_PROFILE_FAIL, payload: { error: err.message } });
  }
}

export default all([
  takeLatest(profilesActions.GET_PROFILE_REQUEST, getProfile),
])
