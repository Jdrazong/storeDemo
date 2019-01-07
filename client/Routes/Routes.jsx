import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomeContainer } from 'Home';
import { CheckoutContainer } from 'Checkout';
import { Cart } from 'Cart';
import { ProductDetailsContainer } from 'Products';
import { SummaryContainer } from 'Summary';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={CheckoutContainer} />
        <Route path="/productDetails/:id" component={ProductDetailsContainer} />
        <Route path="/orderSummary" component={SummaryContainer} />
    </Switch>
);

export default Routes;
