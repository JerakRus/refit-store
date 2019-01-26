import { handleActions } from 'redux-actions';
import { combineReducers } from "redux";
import * as actions from '../../actions/items';
import * as actionsCart from '../../actions/cart';


const items = handleActions({
    [actions.setItemsSuccess](state, { payload: { items } }) {
        const parts = items.filter(item => item.type === 'parts');
        return [...state, ...parts];
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
        const parts = payload.filter(item => item.type === 'parts');
        const models = parts.reduce((acc, item) => {
            const md = `${item.firm} ${item.model}`;
            return acc.includes(md) ? acc : [...acc, md];
        }, []);
        return models;
    }
}, []);

const parts = combineReducers({
    items,
    models,
});

export default parts;