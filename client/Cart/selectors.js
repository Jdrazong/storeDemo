import { createSelector } from 'reselect';

const getCartItems = state => state.cart.cart;
const getCartQuantities = state => state.cart.cartQuantities;

const getItemsWithQuantities = createSelector(
    getCartItems,
    getCartQuantities,
    (items, quantities) => items.map(item => ({ quantity: quantities[item.id], product: item }))
);

/*
    should be replaced with fetching currency for selected region with internationalization implemented,
    temporary solution for demo app with returning EUR as default
*/
const getFirstItemCurrency = createSelector(
    getCartItems,
    (items) => {
        const firstItem = items.find(item => item.currency);
        return firstItem && firstItem.currency ? firstItem.currency : 'EUR';
    }
);

const getTotalCartPrice = createSelector(
    getCartItems,
    getCartQuantities,
    (items, quantities) => items.reduce((totalPrice, item) => totalPrice + (item.price * quantities[item.id]), 0) || 0.00
);

const isCartEmpty = createSelector(
    getCartItems,
    cart => !cart.length
);

const getTotalItemsCount = createSelector(
    getCartQuantities,
    quantities => Object.keys(quantities).reduce((prevValue, nextValue) => prevValue + quantities[nextValue], 0)
);

export default {
    getItemsWithQuantities,
    getFirstItemCurrency,
    getTotalCartPrice,
    isCartEmpty,
    getTotalItemsCount
};
