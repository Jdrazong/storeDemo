import { asyncActionCreator, actionCreator } from 'redux-action-creator';
import { api } from 'shared';
import * as constants from './constants';

const {
    types: {
        FETCH_PRODUCTS,
        SET_NAME_FILTER_VALUE,
        SET_SELECTED_CATEGORY,
        FETCH_PRODUCT_DETAILS,
        RESET_FILTERS
    },
    FETCH_PRODUCTS_URL,
    FETCH_PRODUCT_DETAILS_URL
} = constants;

const actions = {
    fetchProducts: asyncActionCreator(FETCH_PRODUCTS, () => api.get(FETCH_PRODUCTS_URL)),
    setNameFilterValue: actionCreator(SET_NAME_FILTER_VALUE, 'nameFilterValue'),
    setSelectedCategory: actionCreator(SET_SELECTED_CATEGORY, 'category'),
    getProductDetails: asyncActionCreator(FETCH_PRODUCT_DETAILS, 'id', payload => api.get(`${FETCH_PRODUCT_DETAILS_URL}?id=${payload.id}`)),
    resetFilters: actionCreator(RESET_FILTERS)
};

export default actions;
