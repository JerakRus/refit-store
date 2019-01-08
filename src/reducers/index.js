import { combineReducers } from 'redux';
import parts from './Parts';
import menu from './Menu';

export default combineReducers({
    parts,
    menu,
});