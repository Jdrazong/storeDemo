import { connect } from 'react-redux';
import { compose } from 'redux';
import { actions } from 'Products';
import Home from './Home';

const { fetchProducts, resetFilters } = actions;

const mapDispatchToProps = dispatch => ({
    fetchProducts: compose(
        dispatch,
        fetchProducts
    ),
    resetFilters: compose(
        dispatch,
        resetFilters
    )
});

export default connect(
    null,
    mapDispatchToProps
)(Home);
