import {all} from "redux-saga/effects";
import articles from "./articles";
import users from "./users";
import generals from "./generals";
import profiles from "./profiles";

export function* sagas() {
  yield all([
    articles,
    users,
    generals,
    profiles,
  ])
}
