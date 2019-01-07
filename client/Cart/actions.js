import { actionCreator } from 'redux-action-creator';
import * as constants from './constants';

const {
    ADD_CART_ITEM,
    CLEAR_CART,
    SET_CART_ITEM_QUANTITY,
    SET_QUANTITY_WITHOUT_REMOVAL
} = constants.types;

const actions = {
    addCartItem: actionCreator(ADD_CART_ITEM, 'item'),
    clearCart: actionCreator(CLEAR_CART),
    setCartItemQuantity: actionCreator(SET_CART_ITEM_QUANTITY, 'itemId', 'quantity'),
    setQuantityWithoutRemoval: actionCreator(SET_QUANTITY_WITHOUT_REMOVAL, 'itemId', 'quantity')
};

export default actions;
