import { createTypes, async } from 'redux-action-creator';

export const CHECKOUT_NAMESPACE = 'CHECKOUT';

export const FETCH_SHIPPING_OPTIONS_URL = '/shippingOptions';
export const FETCH_SHIPPING_OPTIONS = 'FETCH_SHIPPING_OPTIONS';

export const SET_SHIPPING_OPTION = 'SET_SHIPPING_OPTION';

export const SHIPPING_OPTION_LABEL_ID = 'SHIPPING_OPTION';

export const FETCH_PAYMENT_OPTIONS_URL = '/paymentOptions';
export const FETCH_PAYMENT_OPTIONS = 'FETCH_PAYMENT_OPTIONS';

export const SET_PAYMENT_OPTION = 'SET_PAYMENT_OPTION';

export const PAYMENT_OPTION_LABEL_ID = 'PAYMENT_OPTION';

export const SET_ADDRESS = 'SET_ADDRESS';

export const SET_NAME = 'SET_NAME';

export const SUBMIT_ORDER = 'SUBMIT_ORDER';

export const SUBMIT_ORDER_URL = '/submitOrder';

export const RESET_ORDER_SUCCESS = 'RESET_ORDER_SUCCESS';

export const types = createTypes(
    [
        ...async(FETCH_SHIPPING_OPTIONS),
        ...async(FETCH_PAYMENT_OPTIONS),
        SET_SHIPPING_OPTION,
        SET_PAYMENT_OPTION,
        SET_ADDRESS,
        SET_NAME,
        ...async(SUBMIT_ORDER),
        RESET_ORDER_SUCCESS
    ],
    CHECKOUT_NAMESPACE
);
