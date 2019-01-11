import { setModelsSmartphones } from "../../actions/smartphones";
import { handleActions } from 'redux-actions';


export const modelsSmartphones = handleActions({
    [setModelsSmartphones] (state, { payload }) {
        return payload;
    }
}, []);