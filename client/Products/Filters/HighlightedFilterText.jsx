import React from 'react';
import PropTypes from 'prop-types';

const HighlightedFilterText = ({ name, nameFilter }) => {
    const index = name.toLowerCase().indexOf(nameFilter.toLowerCase());

    return index >= 0 ? (
        <div className="product-tile-title">
            {name.substring(0, index)}
            <span className="product-tile-highlighted-text">{name.substring(index, index + nameFilter.length)}</span>
            {name.substring(index + nameFilter.length)}
        </div>
    ) : (
        <div className="product-tile-title">{name}</div>
    );
};

HighlightedFilterText.propTypes = {
    name: PropTypes.string.isRequired,
    nameFilter: PropTypes.string.isRequired
};

export default HighlightedFilterText;
