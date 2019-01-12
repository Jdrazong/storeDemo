import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { hocs } from 'shared';
import Products from './Products';
import selectors from './selectors';

const { getFilteredProducts } = selectors;
const { withLoader } = hocs;

const mapStateToProps = state => ({
    products: getFilteredProducts(state),
    nameFilter: state.products.nameFilter,
    isLoading: state.products.isFetchingProducts
});

export default compose(
    withRouter,
    connect(
        mapStateToProps
    ),
    withLoader
)(Products);
