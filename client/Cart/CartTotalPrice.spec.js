import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { utils } from 'shared';
import CartTotalPrice from './CartTotalPrice';

describe('Cart: CartTotalPrice', () => {
    const baseProps = {
        totalPrice: 21,
        currency: 'EUR'
    };

    it('should render with basic components', () => {
        const wrapper = shallow(<CartTotalPrice {...baseProps} />);

        expect(wrapper.text()).to.contain(utils.formatAmountWithCurrency(baseProps.totalPrice, baseProps.currency));
    });
});
