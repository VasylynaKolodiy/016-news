import { call, put, all, takeLatest } from "redux-saga/effects";
import * as generalsActions from "../actions/generals";
import {Api} from "../api";

function* getTags(action) {
  try {
    const res = yield call(Api.generals.getTags, action.payload);
    yield put({type: generalsActions.GET_TAGS_SUCCESS, payload: res.data});
  } catch (err) {
    yield put({ type:generalsActions.GET_TAGS_FAIL, payload: { error: err.message } });
  }
}

export default all([
  takeLatest(generalsActions.GET_TAGS_REQUEST, getTags),
])
