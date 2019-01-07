import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import QuantityBox from './QuantityBox';

describe('Cart: QuantityBox', () => {
    const baseProps = {
        setQuantity: global.sinonSandbox.spy(),
        setQuantityWithoutRemoval: global.sinonSandbox.spy(),
        currentQuantity: 1
    };

    it('should render with basic components', () => {
        const wrapper = shallow(<QuantityBox {...baseProps} />);

        const input = wrapper.find('input');

        expect(input).to.have.length(1);
        expect(input.props().value).to.equal(baseProps.currentQuantity);
    });

    it('should set quantity without removal', () => {
        const wrapper = shallow(<QuantityBox {...baseProps} />);

        const input = wrapper.find('input');

        input.simulate('change', { target: { value: '1' } });
        expect(baseProps.setQuantityWithoutRemoval.calledOnce).to.equal(true);
        expect(baseProps.setQuantityWithoutRemoval.calledWith({ target: { value: '1' } })).to.equal(true);
    });

    it('should set quantity', () => {
        const wrapper = shallow(<QuantityBox {...baseProps} />);

        const input = wrapper.find('input');

        input.simulate('blur', { target: { value: '1' } });
        expect(baseProps.setQuantity.calledOnce).to.equal(true);
        expect(baseProps.setQuantity.calledWith({ target: { value: '1' } })).to.equal(true);
    });
});
