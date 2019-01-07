import { connect } from 'react-redux';
import { components } from 'shared';
import actions from './actions';

const { Input } = components;
const { setName } = actions;

const mapStateToProps = state => ({
    id: 'nameContainer',
    value: state.checkout.name,
    className: 'checkout-name-input',
    type: 'text'
});

const mapDispatchToProps = dispatch => ({
    changeHandler: event => dispatch(setName({ name: event.target.value }))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Input);
