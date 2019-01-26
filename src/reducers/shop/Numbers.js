import { handleActions } from 'redux-actions';
import { combineReducers} from "redux";
import * as actions from '../../actions/items';
import * as actionsCart from "../../actions/cart";


const items = handleActions({
    [actions.setItemsSuccess](state, { payload: { items } }) {
        const numbers = items.filter(item => item.type === 'numbers');
        return [...state, ...numbers];
    },
    [actionsCart.addToCart](state, { payload }) {
        const newState =  state.map(i => {
            if (i._id === payload._id) {
                i.addCount += 1;
            }
            return i;
        });
        return newState;
    },
    [actionsCart.removeFromCart](state, { payload }) {
        const newState =  state.map(i => {
            if (i._id === payload._id) {
                i.addCount -= 1;
            }
            return i;
        });
        return newState;
    },
}, []);

const numbers = combineReducers({
    items,
});

export default numbers;