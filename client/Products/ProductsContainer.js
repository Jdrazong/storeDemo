import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { hocs } from 'shared';
import Products from './Products';
import selectors from './selectors';

const { getFilteredProducts } = selectors;
const { withConditionalRender, withLoader } = hocs;

const mapStateToProps = state => ({
    products: getFilteredProducts(state),
    nameFilter: state.products.nameFilter,
    shouldRender: getFilteredProducts(state),
    isLoading: state.products.isFetchingProducts
});

export default compose(
    withRouter,
    connect(
        mapStateToProps
    ),
    withConditionalRender,
    withLoader
)(Products);
