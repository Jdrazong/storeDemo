import { connect } from 'react-redux';
import { compose } from 'redux';
import { actions } from 'Checkout';
import Summary from './Summary';

const { resetOrderSuccess } = actions;

const mapDispatchToProps = dispatch => ({
    resetOrderSuccess: compose(
        dispatch,
        resetOrderSuccess
    )
});

const mapStateToProps = state => ({
    orderSummary: state.checkout.orderSummary
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Summary);
