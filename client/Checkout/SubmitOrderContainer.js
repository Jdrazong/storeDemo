import { connect } from 'react-redux';
import { compose } from 'redux';
import { components, messages } from 'shared';
import cartSelectors from 'Cart/selectors';
import selectors from './selectors';
import actions from './actions';

const { Button } = components;
const { submitOrder } = actions;
const { getItemsWithQuantities } = cartSelectors;
const { getSelectedShippingOption, getSelectedPaymentOption } = selectors;

const mapStateToProps = state => ({
    className: 'checkout-submit-button',
    text: messages.buttons.checkout.submitOrder,
    isPrimary: true,
    name: state.checkout.name,
    address: state.checkout.address,
    selectedShippingOption: getSelectedShippingOption(state),
    selectedPaymentOption: getSelectedPaymentOption(state),
    cart: getItemsWithQuantities(state)
});

const mapDispatchToProps = dispatch => ({
    submitOrder: compose(
        dispatch,
        submitOrder
    )
});

const mergeProps = (stateProps, dispatchProps) => ({
    className: stateProps.className,
    text: stateProps.text,
    isPrimary: stateProps.isPrimary,
    clickHandler: () => dispatchProps.submitOrder({
        order: {
            cart: stateProps.cart,
            name: stateProps.name,
            address: stateProps.address,
            shippingOption: stateProps.selectedShippingOption,
            paymentOption: stateProps.selectedPaymentOption
        }
    })
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(Button);
