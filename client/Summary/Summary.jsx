import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { components, messages, utils } from 'shared';

const { Content } = components;

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
                <div className="summary-total-price">
                    {`${messages.cart.labels.totalPrice}: ${utils.formatAmountWithCurrency(orderSummary.totalPrice, orderSummary.currency)}`}
                </div>
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
