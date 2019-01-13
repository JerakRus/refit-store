import { handleActions } from 'redux-actions';
import { combineReducers} from "redux";
import * as actions from '../../actions/numbers';
import * as actionsCart from "../../actions/cart";


const SetState = handleActions({
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

const items = handleActions({
    [actions.setNumbersSuccess](state, { payload: { numbers } }) {
        return [...state, ...numbers];
    },
    [actionsCart.addToCart](state, { payload }) {
        const newState =  state.map(i => {
            if (i.id === payload.id) {
                i.addCount += 1;
            }
            return i;
        });
        return newState;
    },
    [actionsCart.removeFromCart](state, { payload }) {
        const newState =  state.map(i => {
            if (i.id === payload.id) {
                i.addCount -= 1;
            }
            return i;
        });
        return newState;
    },
}, []);

const numbers = combineReducers({
    items,
    SetState,
});

export default numbers;