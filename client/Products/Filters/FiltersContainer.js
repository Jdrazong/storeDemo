import { connect } from 'react-redux';
import actions from '../actions';
import selectors from '../selectors';
import Filters from './Filters';

const { getProductsCategories } = selectors;

const { setNameFilterValue } = actions;

const mapStateToProps = state => ({
    productsCategories: getProductsCategories(state),
    nameFilter: state.products.nameFilter
});

const mapDispatchToProps = dispatch => ({
    setNameFilterValue: event => dispatch(setNameFilterValue({ nameFilterValue: event.target.value }))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Filters);
