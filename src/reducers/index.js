import {combineReducers} from "redux";
import getFriends from "./friends";
import {routerReducer} from 'react-router-redux';

let rootReducer = combineReducers({
  routing: routerReducer,
  getFriends
});

export default rootReducer;