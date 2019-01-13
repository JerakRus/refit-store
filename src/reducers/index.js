import { combineReducers } from 'redux';
import { menuPage, siteColor } from './Menu';
import parts  from "./shop/Parts";
import smartphones from './shop/smartphones';
import numbers from "./shop/Numbers";
import filter from './Filter';
import cart from "./Cart";

export default combineReducers({
    menuPage,
    siteColor,
    parts,
    smartphones,
    numbers,
    filter,
    cart,
});

