import React from 'react';
import HeaderItems from './HeaderItems';
import CartLink from './CartLink';
import CartItemsCounterContainer from './CartItemsCounterContainer';

const Header = () => (
    <div className="header-container">
        <HeaderItems />
        <CartItemsCounterContainer />
        <CartLink />
    </div>
);

export default Header;
