import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import productList from '../data/productList/reducer';

const rootReducer = combineReducers({
  productList,
});

const middleware = applyMiddleware(
    thunkMiddleware
);

const store = createStore(rootReducer, middleware);

export default store;
