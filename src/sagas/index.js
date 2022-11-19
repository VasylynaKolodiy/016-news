import {all} from "redux-saga/effects";

import articles from "./articles";

export function* sagas() {
  yield all([
    articles,
  ])
}
