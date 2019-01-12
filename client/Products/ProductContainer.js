import { connect } from 'react-redux';
import Product from './Product';

const mapStateToProps = state => ({
    productDetails: state.products.productDetails
});

export default connect(
    mapStateToProps
)(Product);
