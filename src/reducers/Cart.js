import { handleActions } from 'redux-actions';
import * as actionsCart from '../actions/cart';
import { combineReducers } from "redux";

const initState = {
    items: [],
    count: 0,
    total: 0,
};

const items = handleActions({
    [actionsCart.addToCart](state, { payload }) {
        return [...state, payload];
    },
    [actionsCart.removeFromCart](state, { payload }) {
        return state.filter(item => item.id !== payload.id);
    }
}, []);


const cart = combineReducers({
    items,
});

export default cart;