import React from 'react';
import PropTypes from 'prop-types';
import { messages } from 'shared';
import SelectedCategoryContainer from './SelectedCategoryContainer';

const Filters = ({ nameFilter, setNameFilterValue }) => (
    <div>
        <input
            className="product-search-input"
            placeholder={messages.filters.placeholders.searchPlaceholder}
            value={nameFilter}
            onChange={setNameFilterValue}
        />
        <SelectedCategoryContainer />
    </div>
);

Filters.propTypes = {
    setNameFilterValue: PropTypes.func.isRequired,
    nameFilter: PropTypes.string.isRequired
};

export default Filters;
