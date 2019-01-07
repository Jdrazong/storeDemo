import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import CartItem from './CartItem';

describe('Cart: CartItem', () => {
    const baseProps = {
        cartItem: {
            quantity: 1,
            product: {
                img: 'exampleImage',
                name: 'exampleName'
            }
        }
    };

    it('should render with basic components', () => {
        const wrapper = shallow(<CartItem {...baseProps} />);
        const image = wrapper.find('img');

        expect(image).to.have.length(1);
        expect(image.props().src).to.eql(baseProps.cartItem.product.img);
    });
});
