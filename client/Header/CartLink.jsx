import React from 'react';
import { Link } from 'react-router-dom';
import shoppingCartImage from 'icons/shopping-cart.png';
import { CART_LINK } from './constants';

const CartLink = () => (
    <Link className="header-item" to={CART_LINK}>
        <img
            className="header-cart-link"
            src={shoppingCartImage}
            alt="cart"
        />
    </Link>
);

export default CartLink;
