import { combineReducers } from 'redux';
import { parts, partsSetState }  from "./shop/Parts";
import { menuPage, siteColor } from './Menu';
import { modelsParts } from './shop/ModelsParts';
import { smartphonesSetState, smartphones } from './shop/smartphones';
import { modelsSmartphones } from './shop/ModelsSmartphones';

export default combineReducers({
    parts,
    modelsParts,
    partsSetState,
    smartphones,
    modelsSmartphones,
    smartphonesSetState,
    menuPage,
    siteColor,
});