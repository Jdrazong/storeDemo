import React from 'react';
import { Link } from 'react-router-dom';
import { components, messages } from 'shared';
import CartItemsContainer from '../CartItems/CartItemsContainer';
import { CHECKOUT_LINK } from '../constants';
import CartTotalPriceContainer from './CartTotalPriceContainer';
import ClearCartContainer from './ClearCartContainer';

const { Content } = components;

const Cart = () => (
    <Content>
        <CartItemsContainer />
        <CartTotalPriceContainer />
        <div className="cart-buttons-container">
            <ClearCartContainer />
            <Link to={CHECKOUT_LINK}>
                <div className="cart-checkout-link button-primary">
                    {messages.buttons.cartButtons.checkoutLink}
                </div>
            </Link>
        </div>
    </Content>
);

export default Cart;
