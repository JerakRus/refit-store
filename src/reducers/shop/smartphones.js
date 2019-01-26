import { handleActions } from 'redux-actions';
import {combineReducers} from "redux";
import * as actions from '../../actions/items';
import * as actionsCart from "../../actions/cart";



const items = handleActions({
    [actions.setItemsSuccess](state, { payload: { items } }) {
        const smartphones = items.filter(item => item.type === 'phones');
        return [...state, ...smartphones];
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

const models = handleActions({
    [actions.setModelsItems] (state, { payload }) {
        const smartphones = payload.filter(item => item.type === 'phones');
        const models = smartphones.reduce((acc, item) => {
            const md = `${item.firm}`;
            return acc.includes(md) ? acc : [...acc, md];
        }, []);
        return models;
    }
}, []);

const smartphones = combineReducers({
    items,
    models,
});

export default smartphones;