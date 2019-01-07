import { connect } from 'react-redux';
import { compose } from 'redux';
import { selectors } from 'Cart';
import { hocs } from 'shared';
import CartItemsCounter from './CartItemsCounter';

const { getTotalItemsCount } = selectors;
const { withConditionalRender } = hocs;

const mapStateToProps = state => ({
    cartItemsCount: getTotalItemsCount(state),
    shouldRender: getTotalItemsCount(state)
});

export default compose(
    connect(
        mapStateToProps
    ),
    withConditionalRender
)(CartItemsCounter);
