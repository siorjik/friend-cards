import {combineReducers} from "redux";
import {getFriends, filterFriend} from "./friends";
import {routerReducer} from 'react-router-redux';

let rootReducer = combineReducers({
  routing: routerReducer,
  getFriends,
  filterFriend
});

export default rootReducer;