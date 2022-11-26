import {all} from "redux-saga/effects";
import articles from "./articles";
import users from "./users";

export function* sagas() {
  yield all([
    articles,
    users,
  ])
}
