import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import {recipeReducer, modalReducer} from "./reducers";

export default combineReducers({
  routing: routerReducer,
  recipeReducer,
  modalReducer
});
