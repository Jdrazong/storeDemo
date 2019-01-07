import { createTypes } from 'redux-action-creator';

export const CART_NAMESPACE = 'CART';

export const ADD_CART_ITEM = 'ADD_CART_ITEM';
export const CLEAR_CART = 'CLEAR_CART';
export const SET_CART_ITEM_QUANTITY = 'SET_CART_ITEM_QUANTITY';
export const SET_QUANTITY_WITHOUT_REMOVAL = 'SET_QUANTITY_WITHOUT_REMOVAL';

export const CHECKOUT_LINK = '/checkout';

export const types = createTypes(
    [
        ADD_CART_ITEM,
        CLEAR_CART,
        SET_CART_ITEM_QUANTITY,
        SET_QUANTITY_WITHOUT_REMOVAL
    ],
    CART_NAMESPACE
);
