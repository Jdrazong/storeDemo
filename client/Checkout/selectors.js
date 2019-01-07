import { createSelector } from 'reselect';

const getShippingOptions = state => state.checkout.shippingOptions;
const getPaymentOptions = state => state.checkout.paymentOptions;
const shippingOptionIndex = state => state.checkout.selectedShippingOption;
const paymentOptionIndex = state => state.checkout.selectedPaymentOption;

const getShippingOptionsFetchingStatus = state => state.checkout.isFetchingShippingOptions;
const getPaymentOptionsFetchingStatus = state => state.checkout.isFetchingPaymentOptions;

const getSelectShippingOptions = createSelector(
    getShippingOptions,
    options => options.map(option => ({ value: option.id.toString(), text: option.name }))
);

const getSelectPaymentOptions = createSelector(
    getPaymentOptions,
    options => options.map(option => ({ value: option.id.toString(), text: option.name }))
);

const isFetchingCheckoutData = createSelector(
    [
        getShippingOptionsFetchingStatus,
        getPaymentOptionsFetchingStatus
    ],
    (shippingStatus, paymentStatus) => shippingStatus || paymentStatus
);

const getSelectedShippingOption = createSelector(
    [
        shippingOptionIndex,
        getShippingOptions
    ],
    (index, options) => options[index]
);

const getSelectedPaymentOption = createSelector(
    [
        paymentOptionIndex,
        getPaymentOptions
    ],
    (index, options) => options[index]
);

export default {
    getSelectShippingOptions,
    getSelectPaymentOptions,
    isFetchingCheckoutData,
    getSelectedShippingOption,
    getSelectedPaymentOption
};
