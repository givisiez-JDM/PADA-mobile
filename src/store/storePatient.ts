import { createStore } from "redux";
import rootPatient from "./reducePatient";

const initialState = {
  patient: {},
};

const storePatient = createStore(rootPatient, initialState);

export default storePatient;
