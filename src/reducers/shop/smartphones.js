import { handleActions } from 'redux-actions';
import * as actionsSmartphones from '../../actions/smartphones';




export const smartphonesSetState = handleActions({
    [actionsSmartphones.setSmartphonesRequest]() {
        return 'requested';
    },
    [actionsSmartphones.setSmartphonesSuccess]() {
        return 'successed';
    },
    [actionsSmartphones.setSmartphonesFailure]() {
        return 'failed';
    },
}, 'none')

export const smartphones = handleActions({
    [actionsSmartphones.setSmartphonesSuccess](state, { payload: { parts } }) {
        return [...state, ...parts];
    },
}, []);
