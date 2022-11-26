import { combineReducers } from "redux";
import articles from "./articles";
import users from "./users";

const reducers = combineReducers({
  articles: articles,
  users: users,
});

export { reducers };
