import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { components, messages } from 'shared';

const { Content, AmountWithCurrency } = components;

class Summary extends Component {
    componentDidMount() {
        const { resetOrderSuccess } = this.props;
        resetOrderSuccess();
    }

    render() {
        const { orderSummary } = this.props;
        return (
            <Content>
                <div className="summary-header">{messages.summary.text.confirmation}</div>
                <AmountWithCurrency
                    className="summary-total-price"
                    label={messages.cart.labels.totalPrice}
                    amount={orderSummary.totalPrice}
                    currency={orderSummary.currency}
                />
                <div className="summary-ordered-items-header">{messages.summary.text.orderedItems}</div>
                <div className="summary-ordered-items-container">
                    {orderSummary.orderedItems.map(item => (
                        <div
                            key={item.name}
                            className="ordered-item"
                        >
                            {`${item.quantity} x ${item.name}`}
                        </div>
                    ))}
                </div>
            </Content>
        );
    }
}

Summary.propTypes = {
    orderSummary: PropTypes.shape({
        currency: PropTypes.string,
        orderedItems: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string,
            quantity: PropTypes.number
        })),
        totalPrice: PropTypes.number
    }).isRequired,
    resetOrderSuccess: PropTypes.func.isRequired
};

export default Summary;
