import { connect } from 'react-redux';
import { compose } from 'redux';
import { components } from 'shared';
import actions from '../actions';

const { setCartItemQuantity, setQuantityWithoutRemoval } = actions;
const { Input } = components;

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
    changeHandler: event => dispatchProps.setQuantityWithoutRemoval({ itemId: stateProps.itemId, quantity: parseInt(event.target.value, 10) }),
    value: stateProps.currentQuantity,
    className: 'cart-quantity-box',
    type: 'text',
    min: 0,
    blurHandler: event => dispatchProps.setQuantity({ itemId: stateProps.itemId, quantity: parseInt(event.target.value, 10) })
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(Input);
