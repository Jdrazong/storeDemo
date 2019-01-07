import { combineReducers } from 'redux';
import * as constants from './constants';

const {
    FETCH_SHIPPING_OPTIONS_SUCCESS,
    SET_SHIPPING_OPTION,
    FETCH_SHIPPING_OPTIONS,
    FETCH_SHIPPING_OPTIONS_FAIL,
    FETCH_PAYMENT_OPTIONS_SUCCESS,
    SET_PAYMENT_OPTION,
    FETCH_PAYMENT_OPTIONS,
    FETCH_PAYMENT_OPTIONS_FAIL,
    SET_ADDRESS,
    SET_NAME,
    SUBMIT_ORDER_SUCCESS,
    RESET_ORDER_SUCCESS
} = constants.types;

const shippingOptions = (state = [], action) => {
    switch (action.type) {
    case FETCH_SHIPPING_OPTIONS_SUCCESS:
        return action.response;
    default:
        return state;
    }
};

const selectedShippingOption = (state = '0', action) => {
    switch (action.type) {
    case SET_SHIPPING_OPTION:
        return action.payload.option;
    default:
        return state;
    }
};

const isFetchingShippingOptions = (state = false, action) => {
    switch (action.type) {
    case FETCH_SHIPPING_OPTIONS:
        return true;
    case FETCH_SHIPPING_OPTIONS_SUCCESS:
    case FETCH_SHIPPING_OPTIONS_FAIL:
        return false;
    default:
        return state;
    }
};

const paymentOptions = (state = [], action) => {
    switch (action.type) {
    case FETCH_PAYMENT_OPTIONS_SUCCESS:
        return action.response;
    default:
        return state;
    }
};

const selectedPaymentOption = (state = '0', action) => {
    switch (action.type) {
    case SET_PAYMENT_OPTION:
        return action.payload.option;
    default:
        return state;
    }
};

const isFetchingPaymentOptions = (state = false, action) => {
    switch (action.type) {
    case FETCH_PAYMENT_OPTIONS:
        return true;
    case FETCH_PAYMENT_OPTIONS_SUCCESS:
    case FETCH_PAYMENT_OPTIONS_FAIL:
        return false;
    default:
        return state;
    }
};

const address = (state = '', action) => {
    switch (action.type) {
    case SET_ADDRESS:
        return action.payload.address;
    case RESET_ORDER_SUCCESS:
        return '';
    default:
        return state;
    }
};

const name = (state = '', action) => {
    switch (action.type) {
    case SET_NAME:
        return action.payload.name;
    case RESET_ORDER_SUCCESS:
        return '';
    default:
        return state;
    }
};

const orderSubmittedSucces = (state = false, action) => {
    switch (action.type) {
    case SUBMIT_ORDER_SUCCESS:
        return true;
    case RESET_ORDER_SUCCESS:
        return false;
    default:
        return state;
    }
};

const orderSummary = (state = {}, action) => {
    switch (action.type) {
    case SUBMIT_ORDER_SUCCESS:
        return action.response;
    default:
        return state;
    }
};

export default combineReducers({
    shippingOptions,
    paymentOptions,
    selectedShippingOption,
    selectedPaymentOption,
    isFetchingShippingOptions,
    isFetchingPaymentOptions,
    address,
    name,
    orderSubmittedSucces,
    orderSummary
});
