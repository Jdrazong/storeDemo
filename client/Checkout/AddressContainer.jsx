import { connect } from 'react-redux';
import { components } from 'shared';
import actions from './actions';

const { Input } = components;
const { setAddress } = actions;

const mapStateToProps = state => ({
    id: 'addressContainer',
    value: state.checkout.address,
    className: 'checkout-address-input',
    type: 'text'
});

const mapDispatchToProps = dispatch => ({
    changeHandler: event => dispatch(setAddress({ address: event.target.value }))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Input);
