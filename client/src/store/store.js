import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from "./categoriesSlice";
import { combineReducers } from 'redux';
import productsReducer from './productsSlice';
import filterReducer from "./filterSlice";
import cartReducer  from './cartSlice';

const mainReducer = combineReducers ({
  categories: categoriesReducer,
  products: productsReducer,
  filter: filterReducer,
  cartReducer,
})

const store = configureStore({
  reducer: mainReducer,
});

export default store;