import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { actions, selectors } from 'Cart';
import { hocs } from 'shared';
import checkoutActions from './actions';
import Checkout from './Checkout';

const { fetchShippingOptions, fetchPaymentOptions } = checkoutActions;
const { clearCart } = actions;
const { isCartEmpty } = selectors;
const { withLoader } = hocs;

const mapStateToProps = state => ({
    orderSubmittedSuccess: state.checkout.orderSubmittedSucces,
    isCartEmpty: isCartEmpty(state),
    isLoading: state.checkout.isFetchingPaymentOptions || state.checkout.isFetchingShippingOptions
});

const mapDispatchToProps = dispatch => ({
    fetchShippingOptions: compose(
        dispatch,
        fetchShippingOptions
    ),
    fetchPaymentOptions: compose(
        dispatch,
        fetchPaymentOptions
    ),
    clearCart: compose(
        dispatch,
        clearCart
    )
});

export default compose(
    withRouter,
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    withLoader
)(Checkout);
