import { connect } from 'react-redux';
import { compose } from 'redux';
import { hocs } from 'shared';
import Product from './Product';

const { withConditionalRender } = hocs;

const mapStateToProps = state => ({
    shouldRender: Boolean(state.products.productDetails.productDescription),
    productDetails: state.products.productDetails
});

export default compose(
    connect(
        mapStateToProps
    ),
    withConditionalRender
)(Product);
