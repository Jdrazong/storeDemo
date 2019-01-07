import { connect } from 'react-redux';
import { compose } from 'redux';
import QuantityBox from './QuantityBox';
import actions from './actions';

const { setCartItemQuantity, setQuantityWithoutRemoval } = actions;

const mapStateToProps = (state, ownProps) => ({
    itemId: ownProps.itemId,
    currentQuantity: state.cart.cartQuantities[ownProps.itemId]
});

const mapDispatchToProps = dispatch => ({
    setQuantity: compose(
        dispatch,
        setCartItemQuantity
    ),
    setQuantityWithoutRemoval: compose(
        dispatch,
        setQuantityWithoutRemoval
    )
});

const mergeProps = (stateProps, dispatchProps) => ({
    setQuantity: event => dispatchProps.setQuantity({ itemId: stateProps.itemId, quantity: parseInt(event.target.value, 10) }),
    setQuantityWithoutRemoval: event => dispatchProps.setQuantityWithoutRemoval({ itemId: stateProps.itemId, quantity: parseInt(event.target.value, 10) }),
    currentQuantity: stateProps.currentQuantity
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(QuantityBox);
