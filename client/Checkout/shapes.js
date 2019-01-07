import PropTypes from 'prop-types';

const shippingOptionShape = {
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    currency: PropTypes.string,
    estimatedDelivery: PropTypes.string
};

export {
    shippingOptionShape
};
