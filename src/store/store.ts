import { createStore } from "redux";
import rootReducer from "./reducer";

const initialState = {
  doctor: {},
};

const store = createStore(rootReducer, initialState);

export default store;
