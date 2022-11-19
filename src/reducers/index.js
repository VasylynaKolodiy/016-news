import { combineReducers } from "redux";

import articles from "./articles";

const reducers = combineReducers({
  articles: articles,
});

export { reducers };
