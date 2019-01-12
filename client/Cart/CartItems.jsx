import React from 'react';
import PropTypes from 'prop-types';
import { productShape } from 'Products';
import CartItem from './CartItem';
import QuantityBoxContainer from './QuantityBoxContainer';

const CartItems = ({ cartItems }) => (
    Boolean(cartItems.length) && cartItems.map(item => (
        <div className="cart-items-container" key={item.product.id}>
            <CartItem cartItem={item} />
            <QuantityBoxContainer itemId={item.product.id} />
        </div>
    )));

CartItems.propTypes = {
    cartItems: PropTypes.arrayOf(
        PropTypes.shape({
            quantity: PropTypes.number.isRequired,
            product: productShape.isRequired
        })
    )
};

export default CartItems;
