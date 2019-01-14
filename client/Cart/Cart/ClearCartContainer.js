import { connect } from 'react-redux';
import { compose } from 'redux';
import { components, messages } from 'shared';
import actions from '../actions';

const { Button } = components;
const { clearCart } = actions;

const mapStateToProps = state => ({
    className: 'cart-clear-cart-button',
    text: messages.buttons.cartButtons.clearCart,
    isPrimary: false,
    shouldRender: Boolean(state.cart.cart.length)
});

const mapDispatchToProps = dispatch => ({
    clickHandler: compose(
        dispatch,
        clearCart
    )
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Button);
