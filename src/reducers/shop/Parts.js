import { handleActions } from 'redux-actions';
import * as actions from '../../actions/parts';

export const partsSetState = handleActions({
    [actions.setPartsRequest]() {
        return 'requested';
    },
    [actions.setPartsSuccess]() {
        return 'successed';
    },
    [actions.setPartsFailure]() {
        return 'failed';
    },
}, 'none');

export const parts = handleActions({
    [actions.setPartsSuccess](state, { payload: { parts } }) {
        return [...state, ...parts];
    },
}, []);

