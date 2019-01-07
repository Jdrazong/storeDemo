import React from 'react';
import PropTypes from 'prop-types';
import { messages } from 'shared';
import { reviewShape } from './shapes';

const Review = ({ review }) => (
    <div className="product-details-review-container">
        <div className="product-details-review-author">{review.author}</div>
        <div className="product-details-review-rating">{`${messages.product.labels.rating}: ${review.rating}`}</div>
        <div className="product-details-review-text">{review.text}</div>
    </div>
);

Review.propTypes = {
    review: PropTypes.shape(reviewShape).isRequired
};

export default Review;
