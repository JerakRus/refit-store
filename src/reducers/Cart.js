import { handleActions } from 'redux-actions';
import * as actionsCart from '../actions/cart';


const cart = handleActions({
    [actionsCart.addToCart](state, { payload }) {
        const newState = state.includes(payload) ? state : [...state, payload];
        return newState;
    },
    [actionsCart.removeFromCart](state, { payload }) {
        const newState = state.filter(i => i.addCount > 0);
        return newState;
    }
}, []);



export default cart;