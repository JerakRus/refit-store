import { handleActions } from 'redux-actions';
import * as actionsMenu from '../actions/Menu';


export const menuPage = handleActions({
    [actionsMenu.switchPage](state, { payload }) {
        return payload;
    }
}, 'Home');

export const siteColor = () => {
    return { color: 'green' };
};
