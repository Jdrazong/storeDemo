import React from 'react';
import PropTypes from 'prop-types';
import { containers, components } from 'shared';
import { productShape } from '../shapes';
import HighlightedFilterText from '../Filters/HighlightedFilterText';

const { AddToCartContainer } = containers;
const { AmountWithCurrency } = components;

const ProductTile = ({ product, nameFilter, goToProductDetails }) => (
    <div
        className="product-tile-container"
        onClick={goToProductDetails}
    >
        <div className="product-tile-image-container">
            <img
                className="product-tile-image"
                src={product.img}
                alt={product.name}
            />
        </div>
        <HighlightedFilterText
            name={product.name}
            nameFilter={nameFilter}
        />
        <AmountWithCurrency
            className="product-tile-price"
            currency={product.currency}
            amount={product.price}
        />
        <div className="product-tile-buttons-container">
            <AddToCartContainer product={product} />
        </div>
    </div>
);

ProductTile.propTypes = {
    product: PropTypes.shape(productShape).isRequired,
    nameFilter: PropTypes.string.isRequired,
    goToProductDetails: PropTypes.func.isRequired
};

export default ProductTile;
