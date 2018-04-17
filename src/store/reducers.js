import { combineReducers } from "redux";
import homeModel from "../modules/home/homeStore/reducer";
import example01Model from "../modules/example01/store/reducer";

const testProjectReducers = combineReducers({
  homeModel,
  example01Model
});

export default testProjectReducers;
