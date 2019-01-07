import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { components } from 'shared';
import { FiltersContainer, ProductsContainer } from 'Products';
import Home from './Home';

describe('Home: Home', () => {
    const baseProps = {
        fetchProducts: () => {},
        resetFilters: () => {}
    };

    it('should render with basic components', () => {
        const wrapper = shallow(<Home {...baseProps} />);

        expect(wrapper.find(components.Content)).to.have.length(1);
        expect(wrapper.find(FiltersContainer)).to.have.length(1);
        expect(wrapper.find(ProductsContainer)).to.have.length(1);
    });

    const propsWithSpies = {
        fetchProducts: global.sinonSandbox.spy(),
        resetFilters: global.sinonSandbox.spy()
    };

    it('reset filters and fetch products after mounting', () => {
        shallow(<Home {...propsWithSpies} />, { lifecycleExperimental: true });

        expect(propsWithSpies.fetchProducts.calledOnce).to.equal(true);
        expect(propsWithSpies.resetFilters.calledOnce).to.equal(true);
    });
});
