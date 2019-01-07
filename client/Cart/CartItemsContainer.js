import { connect } from 'react-redux';
import { compose } from 'redux';
import { hocs } from 'shared';
import actions from './actions';
import selectors from './selectors';
import CartItems from './CartItems';

const { addCartItem } = actions;
const { getItemsWithQuantities } = selectors;
const { withConditionalRender } = hocs;

const mapStateToProps = state => ({
    cartItems: getItemsWithQuantities(state),
    shouldRender: getItemsWithQuantities(state)
});

const mapDispatchToProps = dispatch => ({
    addCartItem: compose(
        dispatch,
        addCartItem
    )
});

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    withConditionalRender
)(CartItems);
