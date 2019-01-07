import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { components } from 'shared';
import Checkout from './Checkout';
import ShippingOptionsContainer from './ShippingOptionsContainer';
import PaymentOptionsContainer from './PaymentOptionsContainer';

describe('Checkout: Checkout', () => {
    const baseProps = {
        fetchShippingOptions: () => {},
        fetchPaymentOptions: () => {},
        isCartEmpty: false,
        history: {
            push: () => {}
        },
        orderSubmittedSuccess: false,
        clearCart: () => {}
    };

    it('should render with basic components', () => {
        const wrapper = shallow(<Checkout {...baseProps} />);

        expect(wrapper.find(components.Content)).to.have.length(1);
        expect(wrapper.find(ShippingOptionsContainer)).to.have.length(1);
        expect(wrapper.find(PaymentOptionsContainer)).to.have.length(1);
    });

    const propsWithSpies = {
        ...baseProps,
        fetchShippingOptions: global.sinonSandbox.spy(),
        fetchPaymentOptions: global.sinonSandbox.spy()
    };

    it('should call fetchShippingOptions and fetchPaymentOptions after mounting', () => {
        shallow(<Checkout {...propsWithSpies} />, { lifecycleExperimental: true });

        expect(propsWithSpies.fetchShippingOptions.calledOnce).to.equal(true);
        expect(propsWithSpies.fetchPaymentOptions.calledOnce).to.equal(true);
    });

    const propsWithHistorySpy = {
        ...baseProps,
        isCartEmpty: true,
        history: {
            push: global.sinonSandbox.spy()
        }
    };

    it('should redirect to home if cart is empty', () => {
        shallow(<Checkout {...propsWithHistorySpy} />, { lifecycleExperimental: true });

        expect(propsWithHistorySpy.history.push.calledOnce).to.equal(true);
        expect(propsWithHistorySpy.history.push.calledWith('/')).to.equal(true);
    });

    const propsWithClearCartSpy = {
        ...baseProps,
        history: {
            push: global.sinonSandbox.spy()
        },
        clearCart: global.sinonSandbox.spy()
    };

    it('should clear cart and redirect to orderSummary after successfully submitting order', () => {
        const wrapper = shallow(<Checkout {...propsWithClearCartSpy} />, { lifecycleExperimental: true });

        expect(propsWithClearCartSpy.clearCart.called).to.equal(false);

        wrapper.setProps({ orderSubmittedSuccess: true });

        expect(propsWithClearCartSpy.clearCart.calledOnce).to.equal(true);
        expect(propsWithClearCartSpy.history.push.calledOnce).to.equal(true);
        expect(propsWithClearCartSpy.history.push.calledWith('/orderSummary')).to.equal(true);
    });
});
