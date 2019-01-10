import { handleActions } from 'redux-actions';
import * as actions from '../../actions/asyncActions';


const initialState = [
    { meta: 55, header: 'frontCam', description: 5 , id: 45},
    { meta: 46, header: 'нижний шлейф', description: '140p', id: 55 }
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
        return [...state, ...parts];
    },
}, initialState);
