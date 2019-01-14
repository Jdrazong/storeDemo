import React from 'react';
import PropTypes from 'prop-types';
import ProductTile from './ProductTile';
import { productShape } from '../shapes';

const Products = ({ products, nameFilter, history }) => Boolean(products.length) && (
    <div className="products-container">
        {products.map(product => (
            <ProductTile
                key={product.id}
                nameFilter={nameFilter}
                product={product}
                goToProductDetails={() => history.push(`/productDetails/${product.id}`)}
            />
        ))}
    </div>
);

Products.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape(productShape)).isRequired,
    nameFilter: PropTypes.string.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired
};

export default Products;
