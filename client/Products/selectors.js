import { createSelector } from 'reselect';
import { ALL_PRODUCTS, CATEGORIES_TO_MESSAGES } from './constants';

const getProducts = state => state.products.allProducts;
const getProductsCategories = state => Array.from(new Set(state.products.allProducts.map(product => product.category)));

const filterProductsByName = state => state.products.allProducts.filter(
    product => product.name.toLowerCase().includes(state.products.nameFilter.toLowerCase())
);

const filterProductsByCategories = state => (
    state.products.allProducts.filter(product => state.products.categoriesFilter === product.category || state.products.categoriesFilter === ALL_PRODUCTS)
);

const sortByFilter = (state) => {
    const {
        allProducts,
        nameFilter
    } = state.products;

    return nameFilter ? allProducts.sort(
        (productA, productB) => {
            const productAIndex = productA.name.toLowerCase().indexOf(nameFilter.toLowerCase());
            const productBIndex = productB.name.toLowerCase().indexOf(nameFilter.toLowerCase());
            return productAIndex - productBIndex;
        }
    ) : allProducts;
};

const getSelectCategories = createSelector(
    getProductsCategories,
    categories => [
        { value: ALL_PRODUCTS, text: CATEGORIES_TO_MESSAGES[ALL_PRODUCTS] },
        ...categories.map(category => ({ value: category, text: CATEGORIES_TO_MESSAGES[category] }))
    ]
);

const getFilteredProducts = createSelector(
    [
        sortByFilter,
        filterProductsByName,
        filterProductsByCategories
    ],
    (products, filteredByName, filteredByCategory) => products.filter(
        product => filteredByName.includes(product) && filteredByCategory.includes(product)
    )
);

export default {
    getProducts,
    getProductsCategories,
    filterProductsByName,
    filterProductsByCategories,
    getFilteredProducts,
    sortByFilter,
    getSelectCategories
};
