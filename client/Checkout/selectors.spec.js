import { expect } from 'chai';
import selectors from './selectors';

describe('Cart: selectors', () => {
    const {
        getSelectShippingOptions,
        getSelectPaymentOptions,
        isFetchingCheckoutData,
        getSelectedShippingOption,
        getSelectedPaymentOption
    } = selectors;

    const initialStore = {
        checkout: {
            shippingOptions: [
                {
                    id: '0',
                    name: 'test'
                },
                {
                    id: '1',
                    name: 'test1'
                }
            ],
            paymentOptions: [
                {
                    id: '0',
                    name: 'test'
                },
                {
                    id: '1',
                    name: 'test1'
                }
            ],
            isFetchingShippingOptions: false,
            isFetchingPaymentOptions: false,
            selectedShippingOption: '0',
            selectedPaymentOption: '0'
        }
    };

    it('should return shipping options', () => {
        expect(getSelectShippingOptions(initialStore)).to.deep.equal([
            { value: initialStore.checkout.shippingOptions[0].id.toString(), text: initialStore.checkout.shippingOptions[0].name },
            { value: initialStore.checkout.shippingOptions[1].id.toString(), text: initialStore.checkout.shippingOptions[1].name }
        ]);
    });

    it('should return payment options', () => {
        expect(getSelectPaymentOptions(initialStore)).to.deep.equal([
            { value: initialStore.checkout.paymentOptions[0].id.toString(), text: initialStore.checkout.paymentOptions[0].name },
            { value: initialStore.checkout.paymentOptions[1].id.toString(), text: initialStore.checkout.paymentOptions[1].name }
        ]);
    });

    it('should return proper values for isFetchingCheckoutData', () => {
        expect(isFetchingCheckoutData(initialStore)).to.equal(false);
        expect(isFetchingCheckoutData({ checkout: { ...initialStore.checkout, isFetchingShippingOptions: true } })).to.equal(true);
        expect(isFetchingCheckoutData({ checkout: { ...initialStore.checkout, isFetchingPaymentOptions: true } })).to.equal(true);
    });

    it('should get selected shipping option', () => {
        expect(getSelectedShippingOption(initialStore)).to.deep.equal(initialStore.checkout.shippingOptions[0]);
    });

    it('should get selected payment option', () => {
        expect(getSelectedPaymentOption(initialStore)).to.deep.equal(initialStore.checkout.paymentOptions[0]);
    });
});
