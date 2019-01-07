import { connect } from 'react-redux';
import { compose } from 'redux';
import { components, messages } from 'shared';
import actions from './actions';

const { Button } = components;
const { clearCart } = actions;

const mapStateToProps = () => ({
    className: 'cart-clear-cart-button',
    text: messages.buttons.cartButtons.clearCart,
    isPrimary: false
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
