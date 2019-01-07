import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { components } from 'shared';
import ProductDetails from './ProductDetails';
import ProductContainer from './ProductContainer';

describe('Products: ProductDetails', () => {
    const baseProps = {
        match: {
            params: {
                id: 'test'
            }
        },
        getProductDetails: () => {}
    };

    global.window = { location: { host: 'test.com' } };

    it('should render with basic components', () => {
        const wrapper = shallow(<ProductDetails {...baseProps} />);

        expect(wrapper.find(components.Content)).to.have.length(1);
        expect(wrapper.find(ProductContainer)).to.have.length(1);
    });

    const propsWithSpy = {
        ...baseProps,
        getProductDetails: global.sinonSandbox.spy()
    };

    it('should get product details after mounting', () => {
        shallow(<ProductDetails {...propsWithSpy} />, { lifecycleExperimental: true });

        expect(propsWithSpy.getProductDetails.calledOnce).to.equal(true);
        expect(propsWithSpy.getProductDetails.calledWith(propsWithSpy.match.params.id)).to.equal(true);
    });
});
