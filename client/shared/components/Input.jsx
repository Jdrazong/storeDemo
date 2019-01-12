import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
    changeHandler,
    value,
    className,
    type,
    min,
    id,
    blurHandler
}) => (
    <input
        id={id}
        className={className}
        value={value}
        onChange={changeHandler}
        type={type}
        onBlur={blurHandler}
        {...(min && { min })}
    />
);

Input.defaultProps = {
    type: 'text',
    min: null,
    blurHandler: () => {}
};

Input.propTypes = {
    changeHandler: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    className: PropTypes.string.isRequired,
    type: PropTypes.string,
    min: PropTypes.number,
    blurHandler: PropTypes.func
};

export default Input;
