import { createAction } from 'redux-actions';
import axios from 'axios';


//I get a list of numbers from the server, I add to the state.
export const setNumbersRequest = createAction('SET_NUMBERS_REQUEST');
export const setNumbersSuccess = createAction('SET_NUMBERS_SUCCESS');
export const setNumbersFailure = createAction('SET_NUMBERS_FAILURE');


export const setNumbers = () => async (dispatch) => {
    dispatch(setNumbersRequest());
    try {
        const response = await axios.get('/api/numbers');
        dispatch(setNumbersSuccess({ numbers: response.data }));
    } catch (e) {
        alert(`Не получилось загрузить список красивых номеров, неполадки на сервере :( ${e}`);
        dispatch(setNumbersFailure());
    }
};
