import thunk from "redux-thunk";
import { adminReducer } from "../reducers/AdminReducer";
import { clientReducer } from "../reducers/ClientReducer";
import { userAuthReducer } from "../reducers/UserAuthReducer";

const { combineReducers, createStore, applyMiddleware } = require("redux");

const rootReducer = combineReducers({
  adminReducer,
  clientReducer,
  userAuthReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
