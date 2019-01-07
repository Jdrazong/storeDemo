import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
    changeHandler,
    value,
    className,
    type,
    min,
    id
}) => (
    <input
        id={id}
        className={className}
        value={value}
        onChange={changeHandler}
        type={type}
        {...(min && { min })}
    />
);

Input.defaultProps = {
    type: 'text',
    min: null
};

Input.propTypes = {
    changeHandler: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    className: PropTypes.string.isRequired,
    type: PropTypes.string,
    min: PropTypes.number
};

export default Input;
