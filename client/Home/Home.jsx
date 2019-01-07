import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FiltersContainer, ProductsContainer } from 'Products';
import { components } from 'shared';

const { Content } = components;

class Home extends Component {
    componentDidMount() {
        const { fetchProducts, resetFilters } = this.props;
        resetFilters();
        fetchProducts();
    }

    render() {
        return (
            <Content>
                <FiltersContainer />
                <ProductsContainer />
            </Content>
        );
    }
}

Home.propTypes = {
    fetchProducts: PropTypes.func.isRequired,
    resetFilters: PropTypes.func.isRequired
};

export default Home;
