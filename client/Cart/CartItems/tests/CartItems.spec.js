import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import CartItems from '../CartItems';
import CartItem from '../CartItem';
import QuantityBoxContainer from '../QuantityBoxContainer';

describe('Cart: CartItems', () => {
    const baseProps = {
        cartItems: [
            {
                quantity: 1,
                product: {}
            },
            {
                quantity: 2,
                product: {}
            }
        ]
    };

    it('should render with basic components', () => {
        const wrapper = shallow(<CartItems {...baseProps} />);

        expect(wrapper.find(CartItem)).to.have.length(2);
        expect(wrapper.find(QuantityBoxContainer)).to.have.length(2);
    });

    it('should not render any items when cart items array is empty', () => {
        const wrapper = shallow(<CartItems cartItems={[]} />);

        expect(wrapper.find(CartItem)).to.have.length(0);
        expect(wrapper.find(QuantityBoxContainer)).to.have.length(0);
    });
});
