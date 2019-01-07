import { connect } from 'react-redux';
import { compose } from 'redux';
import { messages, components, hocs } from 'shared';
import actions from './actions';
import { PAYMENT_OPTION_LABEL_ID } from './constants';
import selectors from './selectors';

const { Select } = components;
const { setSelectedCategory } = actions;
const { getSelectCategories } = selectors;
const { withConditionalRender } = hocs;

const mapStateToProps = state => ({
    selectLabelId: PAYMENT_OPTION_LABEL_ID,
    className: 'products-categories-option',
    labelValue: messages.filters.labels.categoriesSelect,
    value: state.products.categoriesFilter,
    options: getSelectCategories(state),
    labelClassName: 'products-categories-option-label',
    shouldRender: getSelectCategories(state).length
});

const mapDispatchToProps = dispatch => ({
    handleChange: optionValue => dispatch(setSelectedCategory({ category: optionValue }))
});

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    withConditionalRender
)(Select);
