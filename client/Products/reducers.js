import { combineReducers } from 'redux';
import * as constants from './constants';

const {
    types: {
        FETCH_PRODUCTS_SUCCESS,
        SET_NAME_FILTER_VALUE,
        SET_SELECTED_CATEGORY,
        FETCH_PRODUCT_DETAILS_SUCCESS,
        FETCH_PRODUCT_DETAILS,
        FETCH_PRODUCT_DETAILS_FAIL,
        FETCH_PRODUCTS,
        FETCH_PRODUCTS_FAIL,
        RESET_FILTERS
    },
    ALL_PRODUCTS
} = constants;

const allProducts = (state = [], action) => {
    switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
        return action.response;
    default:
        return state;
    }
};

const isFetchingProducts = (state = false, action) => {
    switch (action.type) {
    case FETCH_PRODUCTS:
        return true;
    case FETCH_PRODUCTS_SUCCESS:
    case FETCH_PRODUCTS_FAIL:
        return false;
    default:
        return state;
    }
};

const nameFilter = (state = '', action) => {
    switch (action.type) {
    case SET_NAME_FILTER_VALUE:
        return action.payload.nameFilterValue;
    case RESET_FILTERS:
        return '';
    default:
        return state;
    }
};

const categoriesFilter = (state = ALL_PRODUCTS, action) => {
    switch (action.type) {
    case SET_SELECTED_CATEGORY:
        return action.payload.category;
    case RESET_FILTERS:
        return ALL_PRODUCTS;
    default:
        return state;
    }
};

const productDetails = (state = {}, action) => {
    switch (action.type) {
    case FETCH_PRODUCT_DETAILS_SUCCESS:
        return action.response;
    default:
        return state;
    }
};

const isFetchingProductDetails = (state = false, action) => {
    switch (action.type) {
    case FETCH_PRODUCT_DETAILS:
        return true;
    case FETCH_PRODUCT_DETAILS_SUCCESS:
    case FETCH_PRODUCT_DETAILS_FAIL:
        return false;
    default:
        return state;
    }
};

export default combineReducers({
    allProducts,
    nameFilter,
    categoriesFilter,
    productDetails,
    isFetchingProductDetails,
    isFetchingProducts
});
