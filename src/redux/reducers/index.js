import { combineReducers } from "redux";
import leadsReducer from "./leads.reducer";
import countReducer from "./count.reducer";
const rootReducer = combineReducers({
  leads: leadsReducer,
  count:countReducer
});
export default rootReducer;
