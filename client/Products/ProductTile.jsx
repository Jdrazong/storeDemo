import React from 'react';
import PropTypes from 'prop-types';
import { utils } from 'shared';
import { productShape } from './shapes';
import HighlightedFilterText from './HighlightedFilterText';
import AddToCartContainer from './AddToCartContainer';

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
        <div className="product-tile-price">{utils.formatAmountWithCurrency(product.price, product.currency)}</div>
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
