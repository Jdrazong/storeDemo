import { connect } from 'react-redux';
import { compose } from 'redux';
import actions from './actions';
import selectors from './selectors';
import CartItems from './CartItems';

const { addCartItem } = actions;
const { getItemsWithQuantities } = selectors;

const mapStateToProps = state => ({
    cartItems: getItemsWithQuantities(state)
});

const mapDispatchToProps = dispatch => ({
    addCartItem: compose(
        dispatch,
        addCartItem
    )
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartItems);
