import { setModelsParts } from "../../actions/parts";
import { handleActions } from 'redux-actions';


export const modelsParts = handleActions({
    [setModelsParts] (state, { payload }) {
        console.log(payload);
        return payload;
    }
}, []);