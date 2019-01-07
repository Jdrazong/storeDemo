import PropTypes from 'prop-types';

const productShape = {
    id: PropTypes.number,
    name: PropTypes.string,
    category: PropTypes.string,
    price: PropTypes.number,
    currency: PropTypes.string,
    img: PropTypes.string
};

const reviewShape = {
    author: PropTypes.string,
    id: PropTypes.number,
    rating: PropTypes.string,
    text: PropTypes.string
};

export {
    productShape,
    reviewShape
};
