import { createStore, applyMiddleware, combineReducers } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";

const middleware = applyMiddleware(thunk);

export const store = createStore(combineReducers(reducers), {}, middleware);
