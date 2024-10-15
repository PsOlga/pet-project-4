import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from "./categoriesSlice";
import { combineReducers } from 'redux';
import productsReducer from './productsSlice';
import filterReducer from "./filterSlice";
import cartReducer  from './cartSlice';
import {localCartMiddleware} from "../middlewares/localCartMiddleware";
const mainReducer = combineReducers ({
  categories: categoriesReducer,
  products: productsReducer,
  filter: filterReducer,
  cartReducer,
})

const store = configureStore({
  reducer: mainReducer,
  middleware:(getDefaultMiddleware ) => getDefaultMiddleware()
  .concat(localCartMiddleware)
});

export default store;