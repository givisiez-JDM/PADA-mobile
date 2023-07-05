import { createStore } from "redux";
import rootReducerPatient from "./reducePatient";

const initialState = {
  patient: {},
};

const storePatient = createStore(rootReducerPatient, initialState);

export default storePatient;