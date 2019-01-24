import { handleActions } from 'redux-actions';
import { combineReducers } from "redux";
import * as actions from '../../actions/parts';
import * as actionsCart from '../../actions/cart';
import {setModelsParts} from "../../actions/parts";

const setState = handleActions({
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

const items = handleActions({
    [actions.setPartsSuccess](state, { payload: { parts } }) {
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
    [setModelsParts] (state, { payload }) {
        const models = payload.reduce((acc, item) => {
            const md = `${item.firm} ${item.model}`;
            return acc.includes(md) ? acc : [...acc, md];
        }, []);
        return models;
    }
}, []);

const parts = combineReducers({
    items,
    models,
    setState,
});

export default parts;