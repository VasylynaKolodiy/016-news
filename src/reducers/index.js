import { combineReducers } from "redux";
import articles from "./articles";
import users from "./users";
import generals from "./generals";
import profiles from "./profiles";

const reducers = combineReducers({
  articles: articles,
  users: users,
  generals: generals,
  profiles: profiles,
});

export { reducers };
