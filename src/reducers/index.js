import { combineReducers } from 'redux';
import { menuPage, siteColor } from './Menu';
import { parts, partsSetState }  from "./shop/Parts";
import { smartphonesSetState, smartphones } from './shop/smartphones';
import { numbers, numbersSetState} from "./shop/Numbers";
import { modelsParts } from './shop/ModelsParts';
import { modelsSmartphones } from './shop/ModelsSmartphones';
import filter from './Filter';
import cart from "./Cart";

export default combineReducers({
    menuPage,
    siteColor,
    parts,
    modelsParts,
    partsSetState,
    smartphones,
    modelsSmartphones,
    smartphonesSetState,
    numbers,
    numbersSetState,
    filter,
    cart,
});

