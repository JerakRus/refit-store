import { handleActions } from 'redux-actions';
import * as actions from '../actions/Menu';


export const menuPage = handleActions({
    [actions.switchPage](state, { payload }) {
        return payload;
    }
}, 'Home');

export const siteColor = () => {
    return { color: "green" };
};
