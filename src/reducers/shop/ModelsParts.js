import * as actions from "../../actions/asyncActions";
import { handleActions } from 'redux-actions';


export const modelsParts = handleActions({
    [actions.setModelsParts] (state, { payload }) {
        console.log(payload);
        return payload;
    }
}, []);