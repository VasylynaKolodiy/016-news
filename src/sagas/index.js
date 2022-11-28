import {all} from "redux-saga/effects";
import articles from "./articles";
import users from "./users";
import generals from "./generals";

export function* sagas() {
  yield all([
    articles,
    users,
    generals,
  ])
}
