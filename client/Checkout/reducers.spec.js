import { expect } from 'chai';
import reducer from './reducers';
import * as constants from './constants';

const {
    FETCH_SHIPPING_OPTIONS_SUCCESS,
    SET_SHIPPING_OPTION,
    FETCH_SHIPPING_OPTIONS,
    FETCH_SHIPPING_OPTIONS_FAIL,
    FETCH_PAYMENT_OPTIONS_SUCCESS,
    SET_PAYMENT_OPTION,
    FETCH_PAYMENT_OPTIONS,
    FETCH_PAYMENT_OPTIONS_FAIL,
    SET_ADDRESS,
    SET_NAME,
    SUBMIT_ORDER_SUCCESS,
    RESET_ORDER_SUCCESS
} = constants.types;

describe('Checkout: reducers', () => {
    it('should handle FETCH_SHIPPING_OPTIONS_SUCCESS action', () => {
        const response = { field: 'test' };

        expect(
            reducer({}, {
                type: FETCH_SHIPPING_OPTIONS_SUCCESS,
                response
            }).shippingOptions
        ).to.deep.equal(response);
    });

    it('should handle SET_SHIPPING_OPTION action', () => {
        const payload = { option: 'test' };

        expect(
            reducer({}, {
                type: SET_SHIPPING_OPTION,
                payload
            }).selectedShippingOption
        ).to.equal(payload.option);
    });

    it('should set proper fetching status for shipping option', () => {
        expect(
            reducer({}, {
                type: FETCH_SHIPPING_OPTIONS
            }).isFetchingShippingOptions
        ).to.equal(true);

        expect(
            reducer({ isFetchingShippingOptions: true }, {
                type: FETCH_SHIPPING_OPTIONS_FAIL
            }).isFetchingShippingOptions
        ).to.equal(false);

        expect(
            reducer({ isFetchingShippingOptions: true }, {
                type: FETCH_SHIPPING_OPTIONS_SUCCESS,
                response: {}
            }).isFetchingShippingOptions
        ).to.equal(false);
    });

    it('should handle FETCH_PAYMENT_OPTIONS_SUCCESS action', () => {
        const response = { field: 'test' };

        expect(
            reducer({}, {
                type: FETCH_PAYMENT_OPTIONS_SUCCESS,
                response
            }).paymentOptions
        ).to.deep.equal(response);
    });

    it('should handle SET_PAYMENT_OPTION action', () => {
        const payload = { option: 'test' };

        expect(
            reducer({}, {
                type: SET_PAYMENT_OPTION,
                payload
            }).selectedPaymentOption
        ).to.equal(payload.option);
    });

    it('should set proper fetching status for payment option', () => {
        expect(
            reducer({}, {
                type: FETCH_PAYMENT_OPTIONS
            }).isFetchingPaymentOptions
        ).to.equal(true);

        expect(
            reducer({ isFetchingPaymentOptions: true }, {
                type: FETCH_PAYMENT_OPTIONS_FAIL
            }).isFetchingPaymentOptions
        ).to.equal(false);

        expect(
            reducer({ isFetchingPaymentOptions: true }, {
                type: FETCH_PAYMENT_OPTIONS_SUCCESS,
                response: {}
            }).isFetchingPaymentOptions
        ).to.equal(false);
    });

    it('should set and reset address', () => {
        const payload = { address: 'test' };

        expect(
            reducer({}, {
                type: SET_ADDRESS,
                payload
            }).address
        ).to.equal(payload.address);

        expect(
            reducer({ address: 'test' }, {
                type: RESET_ORDER_SUCCESS
            }).address
        ).to.equal('');
    });

    it('should set and reset name', () => {
        const payload = { name: 'test' };

        expect(
            reducer({}, {
                type: SET_NAME,
                payload
            }).name
        ).to.equal(payload.name);

        expect(
            reducer({ name: 'test' }, {
                type: RESET_ORDER_SUCCESS
            }).name
        ).to.equal('');
    });

    it('should set and reset orderSubmitSuccess', () => {
        expect(
            reducer({}, {
                type: SUBMIT_ORDER_SUCCESS,
                response: {}
            }).orderSubmittedSucces
        ).to.equal(true);

        expect(
            reducer({ orderSubmittedSucces: true }, {
                type: RESET_ORDER_SUCCESS
            }).orderSubmittedSucces
        ).to.equal(false);
    });

    it('should handle SUBMIT_ORDER_SUCCESS', () => {
        const response = { field: 'test' };

        expect(
            reducer({}, {
                type: SUBMIT_ORDER_SUCCESS,
                response
            }).orderSummary
        ).to.deep.equal(response);
    });
});
