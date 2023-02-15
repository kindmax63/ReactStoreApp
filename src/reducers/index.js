import {combineReducers} from "redux";

import phones from './phones';
import shoppingCart from "./shoppingCart";
import filter from "./filter";

export default combineReducers({
    phones,
    shoppingCart,
    filter
});