import { connect } from 'react-redux';
import { selectors } from 'Cart';
import CartItemsCounter from './CartItemsCounter';

const { getTotalItemsCount } = selectors;

const mapStateToProps = state => ({
    cartItemsCount: getTotalItemsCount(state)
});

export default connect(
    mapStateToProps
)(CartItemsCounter);
