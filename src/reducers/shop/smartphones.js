import { handleActions } from 'redux-actions';
import * as actionsSmartphones from '../../actions/smartphones';
import * as actionsCart from "../../actions/cart";
import {setModelsSmartphones} from "../../actions/smartphones";
import {combineReducers} from "redux";

const setState = handleActions({
    [actionsSmartphones.setSmartphonesRequest]() {
        return 'requested';
    },
    [actionsSmartphones.setSmartphonesSuccess]() {
        return 'successed';
    },
    [actionsSmartphones.setSmartphonesFailure]() {
        return 'failed';
    },
}, 'none');

const items = handleActions({
    [actionsSmartphones.setSmartphonesSuccess](state, { payload: { smartphones } }) {
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
    [setModelsSmartphones] (state, { payload }) {
        const models = payload.reduce((acc, item) => {
            const md = `${item.firm}`;
            return acc.includes(md) ? acc : [...acc, md];
        }, []);
        return models;
    }
}, []);

const smartphones = combineReducers({
    items,
    models,
    setState,
});

export default smartphones;