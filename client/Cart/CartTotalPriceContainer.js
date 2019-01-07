import { connect } from 'react-redux';
import CartTotalPrice from './CartTotalPrice';
import selectors from './selectors';

const {
    getTotalCartPrice,
    getFirstItemCurrency
} = selectors;

const mapStateToProps = state => ({
    currency: getFirstItemCurrency(state),
    totalPrice: getTotalCartPrice(state)
});

export default connect(
    mapStateToProps
)(CartTotalPrice);
