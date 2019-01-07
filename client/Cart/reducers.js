import { combineReducers } from 'redux';
import * as constants from './constants';

const {
    ADD_CART_ITEM,
    SET_CART_ITEM_QUANTITY,
    CLEAR_CART,
    SET_QUANTITY_WITHOUT_REMOVAL
} = constants.types;

const cart = (state = [], action) => {
    switch (action.type) {
    case ADD_CART_ITEM:
        return state.find(item => item.id === action.payload.item.id) ? state : [action.payload.item, ...state];
    case SET_CART_ITEM_QUANTITY:
        return action.payload.quantity ? state : state
            .filter(item => item.id !== action.payload.itemId);
    case CLEAR_CART:
        return [];
    default:
        return state;
    }
};

const cartQuantities = (state = {}, action) => {
    switch (action.type) {
    case ADD_CART_ITEM:
        return { ...state, [action.payload.item.id]: state[action.payload.item.id] ? state[action.payload.item.id] + 1 : 1 };
    case CLEAR_CART:
        return {};
    case SET_CART_ITEM_QUANTITY:
        return action.payload.quantity ? { ...state, [action.payload.itemId]: action.payload.quantity } : Object.keys(state)
            .filter(key => parseInt(key, 10) !== action.payload.itemId)
            /* eslint-disable */
            // disabled for reduce
            .reduce((items, currentItem) => {
                items[currentItem] = state[currentItem];
                return items;
            }, {});
            /* eslint-enable */
    case SET_QUANTITY_WITHOUT_REMOVAL:
        return { ...state, [action.payload.itemId]: action.payload.quantity };
    default:
        return state;
    }
};

export default combineReducers({
    cart,
    cartQuantities
});
