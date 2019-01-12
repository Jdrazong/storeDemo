import { connect } from 'react-redux';
import { messages, components } from 'shared';
import actions from './actions';
import { PAYMENT_OPTION_LABEL_ID } from './constants';
import selectors from './selectors';

const { Select } = components;
const { setPaymentOption } = actions;
const { getSelectPaymentOptions } = selectors;

const mapStateToProps = state => ({
    selectLabelId: PAYMENT_OPTION_LABEL_ID,
    className: 'checkout-payment-option',
    labelValue: messages.checkout.labels.paymentOption,
    value: state.checkout.selectedPaymentOption,
    options: getSelectPaymentOptions(state),
    labelClassName: 'checkout-payment-option-label',
    shouldRender: getSelectPaymentOptions(state).length
});

const mapDispatchToProps = dispatch => ({
    handleChange: optionValue => dispatch(setPaymentOption({ option: optionValue }))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Select);
