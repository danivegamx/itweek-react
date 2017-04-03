import * as actionTypes from './actionTypes';
import * as mock from '../mock.json';

export const fetchProductsRequest = () =>
  ({ type: actionTypes.FETCH_PRODUCTS_REQUEST });
export const fetchProductsFailure = message =>
  ({ type: actionTypes.FETCH_PRODUCTS_FAILURE, message });
export const fetchProductsSuccess = products =>
  ({ type: actionTypes.FETCH_PRODUCTS_SUCCESS, products });

export function fetchProducts() {
  //debugger
  return (dispatch) => {
    dispatch(fetchProductsRequest());
    const catalog = mock.catalog;
    return dispatch(fetchProductsSuccess({ catalog }));
  };
}
