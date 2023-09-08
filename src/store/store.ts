/** @format */

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "store/reducers";

const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;

export default store;
