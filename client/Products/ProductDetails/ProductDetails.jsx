import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { components } from 'shared';
import ProductContainer from './ProductContainer';

const { Content } = components;

class ProductDetails extends Component {
    componentDidMount() {
        const { getProductDetails, match } = this.props;
        getProductDetails(match.params.id);
    }

    render() {
        return (
            <Content>
                <ProductContainer />
            </Content>
        );
    }
}

ProductDetails.propTypes = {
    match: PropTypes.shape({
        isExact: PropTypes.bool,
        params: PropTypes.shape({ id: PropTypes.string.isRequired }),
        path: PropTypes.string,
        url: PropTypes.string
    }).isRequired,
    getProductDetails: PropTypes.func.isRequired
};

export default ProductDetails;
