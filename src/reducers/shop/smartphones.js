import { handleActions } from 'redux-actions';
import * as actions from '../../actions/asyncActions';




export const smartphonesSetState = handleActions({
    [actions.setSmartphonesRequest]() {
        return 'requested';
    },
    [actions.setSmartphonesSuccess]() {
        return 'successed';
    },
    [actions.setSmartphonesFailure]() {
        return 'failed';
    },
}, 'none');

export const smartphones = handleActions({
    [actions.setSmartphonesSuccess](state, { payload: { parts } }) {
        return [...state, ...parts];
    },
}, []);
