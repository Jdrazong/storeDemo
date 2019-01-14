import React from 'react';
import PropTypes from 'prop-types';
import { containers } from 'shared';
import { productShape, reviewShape } from '../shapes';
import Review from './Review';

const { AddToCartContainer } = containers;

const Product = ({ productDetails }) => Boolean(productDetails.productDescription) && (
    <div className="product-details-container">
        <div className="product-details-title">{productDetails.product.name}</div>
        <div className="product-details-main-image-container">
            <img
                src={`${window.location.origin}/${productDetails.product.img}`}
                className="product-details-main-image"
                alt={productDetails.product.name}
            />
        </div>
        <div className="product-details-other-images-container">
            {productDetails.images.map(image => (
                <img
                    className="product-details-other-image"
                    src={`${window.location.origin}/${image}`}
                    alt={image}
                    key={image}
                />
            ))}
        </div>
        <div className="product-details-add-to-cart">
            <AddToCartContainer product={productDetails.product} />
        </div>
        <div className="product-details-description">{productDetails.productDescription}</div>
        <div className="product-details-reviews-container">
            {productDetails.reviews.map(review => (
                <Review
                    key={review.id}
                    review={review}
                />
            ))}
        </div>
    </div>
);

Product.propTypes = {
    productDetails: PropTypes.shape({
        product: PropTypes.shape(productShape),
        images: PropTypes.arrayOf(PropTypes.string),
        reviews: PropTypes.arrayOf(PropTypes.shape(reviewShape)),
        productDescription: PropTypes.string
    }).isRequired
};

export default Product;
