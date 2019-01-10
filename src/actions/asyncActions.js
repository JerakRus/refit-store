import React from 'react';
import { createAction } from 'redux-actions';
import axios from 'axios';

export const setPartsRequest = createAction('SET_PARTS_REQUEST');
export const setPartsSuccess = createAction('SET_PARTS_SUCCESS');
export const setPartsFailure = createAction('SET_PARTS_FAILURE');

export const setParts = () => async (dispatch) => {
    dispatch(setPartsRequest());
    try {
        const response = await axios.get('/parts.json');
        dispatch(setPartsSuccess({ parts: response.data }));
    } catch (e) {
        console.log(e);
        dispatch(setPartsFailure());
    };
};