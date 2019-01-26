import { combineReducers } from 'redux';
import { siteColor, menuPage } from './Menu';
import parts  from "./shop/Parts";
import smartphones from './shop/smartphones';
import numbers from "./shop/Numbers";
import { itemsLoaded} from "./shop/Items";
import filter from './Filter';
import cart from "./Cart";
import form from './shop/orderForm';

export default combineReducers({
    menuPage,
    siteColor,
    itemsLoaded,
    parts,
    smartphones,
    numbers,
    filter,
    cart,
    form,
});

