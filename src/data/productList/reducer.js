import * as actionTypes from './actionTypes';

const initialState = {
  cart: {},
  error: { productError: false, message: '' }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS_SUCCESS:
      return { ...state, products: action.products };
    case actionTypes.FETCH_PRODUCTS_FAILURE:
      return { ...state, error: { product: true, messages: action.messages } };
    default:
      return state;
  }
};

export { reducer as default };
