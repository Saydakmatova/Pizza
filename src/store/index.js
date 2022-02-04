import thunk from "redux-thunk";
import { adminReducer } from "../reducers/AdminReducer";
import { clientReducer } from "../reducers/ClientReducer";

const { combineReducers, createStore, applyMiddleware } = require("redux");

const rootReducer = combineReducers({
  adminReducer,
  clientReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
