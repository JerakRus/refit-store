import { setModelsParts } from "../../actions/parts";
import { handleActions } from 'redux-actions';


export const modelsParts = handleActions({
    [setModelsParts] (state, { payload }) {
        return payload;
    }
}, []);