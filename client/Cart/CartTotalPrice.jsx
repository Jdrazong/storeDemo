import React from 'react';
import PropTypes from 'prop-types';
import { utils, messages } from 'shared';

const CartTotalPrice = ({ totalPrice, currency }) => (
    <div className="cart-total-price">
        {`${messages.cart.labels.totalPrice}: ${utils.formatAmountWithCurrency(totalPrice, currency)}`}
    </div>
);

CartTotalPrice.defaultProps = {
    totalPrice: 0,
    currency: 'EUR'
};

CartTotalPrice.propTypes = {
    currency: PropTypes.string,
    totalPrice: PropTypes.number
};

export default CartTotalPrice;
