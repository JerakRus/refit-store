import * as actions from "../../actions/asyncActions";
import { handleActions } from 'redux-actions';


export const modelsSmartphones = handleActions({
    [actions.setModelsSmartphones] (state, { payload }) {
        return payload;
    }
}, []);