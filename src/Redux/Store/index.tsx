import { createStore } from "redux";
import { Reducer } from "../Reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancers = composeWithDevTools({});

export const store = createStore(Reducer, composeEnhancers());
