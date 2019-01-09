import { combineReducers } from 'redux';
import parts from './shop/Parts';
import menu from './Menu';

export default combineReducers({
    parts,
    menu,
});