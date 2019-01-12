import { connect } from 'react-redux';
import { compose } from 'redux';
import actions from 'Cart/actions';
import { components, messages } from 'shared';
import shoppingCartImage from 'icons/shopping-cart.png';

const { Button } = components;
const { addCartItem } = actions;

const mapStateToProps = (state, ownProps) => ({
    className: 'product-tile-button',
    product: ownProps.product,
    imageSource: shoppingCartImage,
    text: messages.buttons.cartButtons.addToCart,
    isPrimary: true,
    shouldRender: true
});

const mapDispatchToProps = dispatch => ({
    addCartItem: compose(
        dispatch,
        addCartItem
    )
});

const mergeProps = (stateProps, dispatchProps) => ({
    className: stateProps.className,
    text: stateProps.text,
    isPrimary: stateProps.isPrimary,
    imageSource: stateProps.imageSource,
    clickHandler: () => dispatchProps.addCartItem({ item: stateProps.product }),
    shouldRender: stateProps.shouldRender
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(Button);
