import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
import userReducer from "./UserReducer";

const middleware = [thunk];

const Store = createStore(userReducer, applyMiddleware(...middleware));

export default Store;
