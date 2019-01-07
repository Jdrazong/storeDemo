import { createTypes, async } from 'redux-action-creator';
import { messages } from 'shared';

export const PRODUCTS_NAMESPACE = 'PRODUCTS_NAMESPACE';
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCTS_URL = '/products';

export const SET_NAME_FILTER_VALUE = 'SET_NAME_FILTER_VALUE';

export const PAYMENT_OPTION_LABEL_ID = 'CATEGORY_FILTER';

export const SET_SELECTED_CATEGORY = 'SET_SELECTED_CATEGORY';

export const ALL_PRODUCTS = 'ALL_PRODUCTS';

export const FETCH_PRODUCT_DETAILS = 'FETCH_PRODUCT_DETAILS';
export const FETCH_PRODUCT_DETAILS_URL = '/productDetails';

export const RESET_FILTERS = 'RESET_FILTERS';

export const CATEGORIES_TO_MESSAGES = {
    ALL_PRODUCTS: messages.filters.categories.allProducts,
    FRYING_PANS: messages.filters.categories.fryingPans,
    TOASTERS: messages.filters.categories.toasters
};

export const types = createTypes(
    [
        ...async(FETCH_PRODUCTS),
        ...async(FETCH_PRODUCT_DETAILS),
        SET_NAME_FILTER_VALUE,
        SET_SELECTED_CATEGORY,
        RESET_FILTERS
    ],
    PRODUCTS_NAMESPACE
);
