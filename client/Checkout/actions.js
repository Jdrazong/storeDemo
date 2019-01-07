import { asyncActionCreator, actionCreator } from 'redux-action-creator';
import { api } from 'shared';
import * as constants from './constants';

const {
    types: {
        FETCH_SHIPPING_OPTIONS,
        FETCH_PAYMENT_OPTIONS,
        SET_SHIPPING_OPTION,
        SET_PAYMENT_OPTION,
        SET_ADDRESS,
        SET_NAME,
        SUBMIT_ORDER,
        RESET_ORDER_SUCCESS
    },
    FETCH_SHIPPING_OPTIONS_URL,
    FETCH_PAYMENT_OPTIONS_URL,
    SUBMIT_ORDER_URL
} = constants;

const actions = {
    fetchShippingOptions: asyncActionCreator(FETCH_SHIPPING_OPTIONS, () => api.get(FETCH_SHIPPING_OPTIONS_URL)),
    fetchPaymentOptions: asyncActionCreator(FETCH_PAYMENT_OPTIONS, () => api.get(FETCH_PAYMENT_OPTIONS_URL)),
    setShippingOption: actionCreator(SET_SHIPPING_OPTION, 'option'),
    setPaymentOption: actionCreator(SET_PAYMENT_OPTION, 'option'),
    setAddress: actionCreator(SET_ADDRESS, 'address'),
    setName: actionCreator(SET_NAME, 'name'),
    submitOrder: asyncActionCreator(SUBMIT_ORDER, 'order', payload => api.post(SUBMIT_ORDER_URL, payload.order)),
    resetOrderSuccess: actionCreator(RESET_ORDER_SUCCESS)
};

export default actions;
