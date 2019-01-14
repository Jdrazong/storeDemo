import actions from './actions';
import products from './reducers';
import Products from './Products/Products';
import ProductsContainer from './Products/ProductsContainer';
import Filters from './Filters/Filters';
import FiltersContainer from './Filters/FiltersContainer';
import ProductDetailsContainer from './ProductDetails/ProductDetailsContainer';
import { productShape } from './shapes';

export {
    actions,
    Products,
    ProductsContainer,
    Filters,
    FiltersContainer,
    products,
    productShape,
    ProductDetailsContainer
};
