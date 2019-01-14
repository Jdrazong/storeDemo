import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { containers } from 'shared';
import Product from '../Product';
import Review from '../Review';

const { AddToCartContainer } = containers;

describe('Products: Product', () => {
    const baseProps = {
        productDetails: {
            product: {
                name: 'testName',
                img: 'testImg'
            },
            images: ['testImage', 'testImage2'],
            reviews: [{ id: 0 }, { id: 1 }],
            productDescription: 'testDescription'
        }
    };

    global.window = { location: { host: 'test.com' } };

    it('should render with basic components', () => {
        const wrapper = shallow(<Product {...baseProps} />);

        expect(wrapper.find('.product-details-container')).to.have.length(1);

        const title = wrapper.find('.product-details-title');
        expect(title).to.have.length(1);
        expect(title.text()).to.contains(baseProps.productDetails.product.name);

        const mainImage = wrapper.find('.product-details-main-image');
        expect(mainImage).to.have.length(1);

        expect(wrapper.find('.product-details-other-images-container')).to.have.length(1);
        expect(wrapper.find('.product-details-other-image')).to.have.length(baseProps.productDetails.images.length);

        expect(wrapper.find(AddToCartContainer)).to.have.length(1);

        const description = wrapper.find('.product-details-description');
        expect(description).to.have.length(1);
        expect(description.text()).to.contain(baseProps.productDetails.productDescription);

        expect(wrapper.find(Review)).to.have.length(baseProps.productDetails.reviews.length);
    });
});
