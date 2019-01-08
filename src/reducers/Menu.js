import { handleActions } from 'redux-actions';
import * as actions from '../actions/Menu';

const initialState = {
    page: 'Home',
};

const menu = handleActions({
    [actions.switchPage](state, { payload }) {
        return {...state, page: payload };
    }
}, initialState);

export default menu;