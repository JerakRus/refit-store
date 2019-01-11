import { handleActions } from 'redux-actions';
import * as actions from '../../actions/numbers';


export const numbersSetState = handleActions({
    [actions.setNumbersRequest]() {
        return 'requested';
    },
    [actions.setNumbersSuccess]() {
        return 'successed';
    },
    [actions.setNumbersFailure]() {
        return 'failed';
    },
}, 'none');

export const numbers = handleActions({
    [actions.setNumbersSuccess](state, { payload: { numbers } }) {
        return [...state, ...numbers];
    },
}, []);
