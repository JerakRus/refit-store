import { createAction } from 'redux-actions';
import axios from 'axios';


//I get a list of smartphones from the server, I add to the state and create a list of models smartphones.
//It is used to automatic display the filter for all available models.
export const setSmartphonesRequest = createAction('SET_SMARTPHONES_REQUEST');
export const setSmartphonesSuccess = createAction('SET_SMARTPHONES_SUCCESS');
export const setSmartphonesFailure = createAction('SET_SMARTPHONES_FAILURE');

export const setModelsSmartphones = createAction('SET_MODELS_SMARTPHONES');

export const setSmartphones = () => async (dispatch) => {
    dispatch(setSmartphonesRequest());
    try {
        const response = await axios.get('/api/phones');
        dispatch(setSmartphonesSuccess({ smartphones: response.data }));
        dispatch(setModelsSmartphones(response.data));
    } catch (e) {
        console.log(e);
        dispatch(setSmartphonesFailure());
    }
};