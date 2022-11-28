import { combineReducers } from "redux";
import articles from "./articles";
import users from "./users";
import generals from "./generals";

const reducers = combineReducers({
  articles: articles,
  users: users,
  generals: generals,
});

export { reducers };
