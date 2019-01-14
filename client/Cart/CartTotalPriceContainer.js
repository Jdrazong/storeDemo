import { connect } from 'react-redux';
import { components, messages } from 'shared';
import selectors from './selectors';

const { AmountWithCurrency } = components;
const {
    getTotalCartPrice,
    getFirstItemCurrency
} = selectors;

const mapStateToProps = state => ({
    currency: getFirstItemCurrency(state),
    amount: getTotalCartPrice(state),
    label: messages.cart.labels.totalPrice,
    className: 'cart-total-price'
});

export default connect(
    mapStateToProps
)(AmountWithCurrency);
