import React from 'react';
import PropTypes from 'prop-types';
import { productShape } from 'Products';

const CartItem = ({ cartItem }) => (
    <div className="cart-item-container">
        <div className="cart-item-name">{cartItem.product.name}</div>
        <img className="cart-item-image" src={cartItem.product.img} alt={cartItem.product.name} />
    </div>
);

CartItem.propTypes = {
    cartItem: PropTypes.shape({
        quantity: PropTypes.number.isRequired,
        product: productShape.isRequired
    }).isRequired
};

export default CartItem;
