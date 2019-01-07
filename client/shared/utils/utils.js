const CURRENCY_MAP = {
    EUR: '€'
};

const formatAmountWithCurrency = (amount, currency) => `${amount.toFixed(2)} ${CURRENCY_MAP[currency]}`;

export {
    formatAmountWithCurrency
};
