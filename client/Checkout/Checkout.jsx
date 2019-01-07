import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { components, messages } from 'shared';
import AddressContainer from './AddressContainer';
import ShippingOptionsContainer from './ShippingOptionsContainer';
import PaymentOptionsContainer from './PaymentOptionsContainer';
import NameContainer from './NameContainer';
import SubmitOrderContainer from './SubmitOrderContainer';

const { Content } = components;

class Checkout extends Component {
    componentDidMount() {
        const {
            fetchShippingOptions, fetchPaymentOptions, isCartEmpty, history
        } = this.props;
        fetchShippingOptions();
        fetchPaymentOptions();

        if (isCartEmpty) {
            history.push('/');
        }
    }

    componentWillReceiveProps(nextProps) {
        const { orderSubmittedSuccess, history, clearCart } = this.props;
        const orderSubmitted = !orderSubmittedSuccess && nextProps.orderSubmittedSuccess;

        if (orderSubmitted) {
            history.push('/orderSummary');
            clearCart();
        }
    }

    render() {
        return (
            <Content>
                <div className="checkout-name-and-address-container">
                    <div className="checkout-name-input-container">
                        <label className="checkout-name-label" htmlFor="nameContainer">
                            {messages.checkout.labels.name}
                            <NameContainer />
                        </label>
                    </div>
                    <div className="checkout-address-input-container">
                        <label className="checkout-address-label" htmlFor="addressContainer">
                            {messages.checkout.labels.address}
                            <AddressContainer />
                        </label>
                    </div>
                </div>
                <div className="checkout-shipping-and-payment-container">
                    <ShippingOptionsContainer />
                    <PaymentOptionsContainer />
                </div>
                <SubmitOrderContainer />
            </Content>
        );
    }
}

Checkout.propTypes = {
    fetchShippingOptions: PropTypes.func.isRequired,
    fetchPaymentOptions: PropTypes.func.isRequired,
    orderSubmittedSuccess: PropTypes.bool.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    clearCart: PropTypes.func.isRequired,
    isCartEmpty: PropTypes.bool.isRequired
};

export default Checkout;
