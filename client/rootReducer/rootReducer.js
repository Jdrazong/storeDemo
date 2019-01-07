import { products } from 'Products';
import { cart } from 'Cart';
import { checkout } from 'Checkout';
import { combineReducers } from 'redux';

export default combineReducers({
    products,
    cart,
    checkout
});
