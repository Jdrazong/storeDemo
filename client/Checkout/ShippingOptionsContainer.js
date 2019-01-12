import { connect } from 'react-redux';
import { messages, components } from 'shared';
import actions from './actions';
import { SHIPPING_OPTION_LABEL_ID } from './constants';
import selectors from './selectors';

const { Select } = components;
const { setShippingOption } = actions;
const { getSelectShippingOptions } = selectors;

const mapStateToProps = state => ({
    selectLabelId: SHIPPING_OPTION_LABEL_ID,
    className: 'checkout-shipping-option',
    labelValue: messages.checkout.labels.shippingOption,
    value: state.checkout.selectedShippingOption,
    options: getSelectShippingOptions(state),
    labelClassName: 'checkout-shipping-option-label',
    shouldRender: Boolean(getSelectShippingOptions(state).length)
});

const mapDispatchToProps = dispatch => ({
    handleChange: optionValue => dispatch(setShippingOption({ option: optionValue }))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Select);
