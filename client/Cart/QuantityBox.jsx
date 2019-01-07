import React from 'react';
import PropTypes from 'prop-types';

const QuantityBox = ({ setQuantity, currentQuantity, setQuantityWithoutRemoval }) => (
    <input
        className="cart-quantity-box"
        value={currentQuantity}
        onChange={setQuantityWithoutRemoval}
        onBlur={setQuantity}
        type="number"
        min="0"
    />
);


QuantityBox.propTypes = {
    setQuantityWithoutRemoval: PropTypes.func.isRequired,
    setQuantity: PropTypes.func.isRequired,
    currentQuantity: PropTypes.number.isRequired
};

export default QuantityBox;
