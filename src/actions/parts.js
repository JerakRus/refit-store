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
        const response = await axios.get('/parts.json');
        dispatch(setPartsSuccess({ parts: response.data }));
        const models = response.data.reduce((acc, item) => {
            const md = `${item.firm} ${item.model}`;
            return acc.includes(md) ? acc : [...acc, md];
        }, []);
        dispatch(setModelsParts(models));
    } catch (e) {
        console.log(e);
        dispatch(setPartsFailure());
    }
};