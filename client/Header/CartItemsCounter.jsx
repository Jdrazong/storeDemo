import React from 'react';
import PropTypes from 'prop-types';

const CartItemsCounter = ({ cartItemsCount }) => (<div className="header-cart-items-counter">{cartItemsCount}</div>);

CartItemsCounter.propTypes = {
    cartItemsCount: PropTypes.number.isRequired
};

export default CartItemsCounter;
