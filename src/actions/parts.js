import { createAction } from 'redux-actions';
import axios from 'axios';


//I get a list of parts from the server, I add to the state and create a list of models parts.
//It is used to automatic display the filter for all available models.
export const setPartsRequest = createAction('SET_PARTS_REQUEST');
export const setPartsSuccess = createAction('SET_PARTS_SUCCESS');
export const setPartsFailure = createAction('SET_PARTS_FAILURE');

export const setModelsParts = createAction('SET_MODELS_PARTS');

export const setParts = () => async (dispatch) => {
    dispatch(setPartsRequest());
    try {
        const response = await axios.get('/api/parts');
        dispatch(setPartsSuccess({ parts: response.data }));
        dispatch(setModelsParts(response.data));
    } catch (e) {
        alert(`Не получилось загрузить список запчастей, неполадки на сервере :( ${e}`);
        dispatch(setPartsFailure());
    }
};