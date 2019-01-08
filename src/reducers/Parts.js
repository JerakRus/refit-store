import { handleActions } from 'redux-actions';
import * as actions from '../actions/Parts';

const initialState = [
    { meta: 0, header: 'frontCam', description: 5 },
    { meta: 1, header: 'нижний шлейф', description: '140p' }
];

const parts = handleActions({
    [actions.setParts](state, { payload }) {
        return {...state, ...payload};
    }
}, initialState);

export default parts;