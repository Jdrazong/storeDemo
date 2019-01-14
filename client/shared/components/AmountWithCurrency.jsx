import React from 'react';
import PropTypes from 'prop-types';
import { messages } from 'shared';

const AmountWithCurrency = ({
    amount,
    className,
    currency,
    label
}) => (
    <div className={className}>
        {`${label ? `${label}: ` : ''}${amount.toFixed(2)} ${messages.currencies.currencyMap[currency]}`}
    </div>
);

AmountWithCurrency.defaultProps = {
    amount: 0,
    currency: 'EUR',
    label: ''
};

AmountWithCurrency.propTypes = {
    amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string.isRequired,
    currency: PropTypes.string,
    label: PropTypes.string
};

export default AmountWithCurrency;
