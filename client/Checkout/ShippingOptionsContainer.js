import { connect } from 'react-redux';
import { compose } from 'redux';
import { messages, components, hocs } from 'shared';
import actions from './actions';
import { SHIPPING_OPTION_LABEL_ID } from './constants';
import selectors from './selectors';

const { Select } = components;
const { setShippingOption } = actions;
const { getSelectShippingOptions } = selectors;
const { withConditionalRender } = hocs;

const mapStateToProps = state => ({
    selectLabelId: SHIPPING_OPTION_LABEL_ID,
    className: 'checkout-shipping-option',
    labelValue: messages.checkout.labels.shippingOption,
    value: state.checkout.selectedShippingOption,
    options: getSelectShippingOptions(state),
    labelClassName: 'checkout-shipping-option-label',
    shouldRender: getSelectShippingOptions(state).length
});

const mapDispatchToProps = dispatch => ({
    handleChange: optionValue => dispatch(setShippingOption({ option: optionValue }))
});

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    withConditionalRender
)(Select);
