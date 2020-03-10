import {benefitsReducer} from "./benefits.js";
import {combineReducers} from "redux";

export const allReducers = combineReducers({
    benefitsReducer : benefitsReducer
});