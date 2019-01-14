import { connect } from 'react-redux';
import { compose } from 'redux';
import { hocs } from 'shared';
import Product from './Product';

const { withLoader } = hocs;

const mapStateToProps = state => ({
    isLoading: state.products.isFetchingProductDetails,
    productDetails: state.products.productDetails
});

export default compose(
    connect(
        mapStateToProps
    ),
    withLoader
)(Product);
