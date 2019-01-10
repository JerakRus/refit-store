import { handleActions } from 'redux-actions';
import * as actions from '../../actions/asyncActions';


const initialState = [
    { meta: 0, header: 'frontCam', description: 5 },
    { meta: 1, header: 'нижний шлейф', description: '140p' }
];

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
        return {...state, ...parts};
    }
}, initialState);
