import { createAction } from 'redux-actions';
import axios from 'axios';


export const sendToMailRequest = createAction('SEND_MAIL_REQUEST');
export const sendToMailSuccess = createAction('SEND_MAIL_SUCCESS');
export const sendToMailFailure = createAction('SEND_MAIL_FAILURE');


export const sendToMail = (data) => async (dispatch) => {
    dispatch(sendToMailRequest());
    try {
        await axios.post('/api/sendToMail', data);
        dispatch(sendToMailSuccess());
    } catch (e) {
        alert(`Не получилось создать заказ, неполадки на сервере :( ${e}`);
        dispatch(sendToMailFailure());
    }
};