import React from 'react';
import { Link } from 'react-router-dom';
import { HEADER_ITEMS } from './constants';

const HeaderItems = () => HEADER_ITEMS.map(item => (
    <Link
        key={item.name}
        className="header-item"
        to={item.link}
    >
        {item.name}
    </Link>
));

export default HeaderItems;
