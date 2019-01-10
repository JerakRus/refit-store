import { combineReducers } from 'redux';
import { parts, partsSetState }  from "./shop/Parts";
import { menuPage, siteColor } from './Menu';

export default combineReducers({
    parts,
    partsSetState,
    menuPage,
    siteColor,
});