import { authReducer } from "./authReducer";
import { calendarReducer } from "./calendarReducer";
import { uiReducer } from "./uiReducers";

const { combineReducers } = require("redux");

export const rootReducer = combineReducers({
  ui: uiReducer,
  calendar: calendarReducer,
  auth: authReducer,
});
