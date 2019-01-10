import { combineReducers } from 'redux';
import { parts, partsSetState }  from "./shop/Parts";
import { menuPage, siteColor } from './Menu';
import {modelsParts} from './shop/ModelsParts';

export default combineReducers({
    parts,
    modelsParts,
    partsSetState,
    menuPage,
    siteColor,
});