import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import Cart from './Cart';
import CartItemsContainer from './CartItemsContainer';
import CartTotalPriceContainer from './CartTotalPriceContainer';
import ClearCartContainer from './ClearCartContainer';

describe('Cart: Cart', () => {
    it('should render with basic components', () => {
        const wrapper = shallow(<Cart />);
        expect(wrapper.find(Link)).to.have.lengthOf(1);
        expect(wrapper.find(CartItemsContainer)).to.have.lengthOf(1);
        expect(wrapper.find(CartTotalPriceContainer)).to.have.lengthOf(1);
        expect(wrapper.find(ClearCartContainer)).to.have.lengthOf(1);
    });
});
