import { handleActions } from 'redux-actions';
import * as actions from '../actions/Parts';

const initialState = [
    { id: 0, name: 'frontCam', price: 5 },
];

const parts = handleActions({
    [actions.setParts](state, { payload }) {
        return {...state, ...payload};
    }
}, initialState);

export default parts;