import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import actions from './actions';

const { getProductDetails } = actions;

const mapStateToProps = state => ({
    isLoading: state.products.isFetchingProductDetails
});

const mapDispatchToProps = dispatch => ({
    getProductDetails: id => dispatch(getProductDetails({ id }))
});

export default compose(
    withRouter,
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(ProductDetails);
