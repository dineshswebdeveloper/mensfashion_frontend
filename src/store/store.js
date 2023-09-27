import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsReducer";
import productReducer from "./slices/productReducer";
import cartReducer from "./slices/cartReducer";
import wishlistReducer from "./slices/wishlistReducer";
import categoriesReducer from "./slices/categoriesReducer";
import searchReducer from "./slices/searchReducer";
import authReducer from "./slices/authReducer";

import thunk from "redux-thunk";
const reducer = combineReducers({
  productsReducer,
  categoriesReducer,
  productReducer,
  cartReducer,
  wishlistReducer,
  authReducer,
  searchReducer,
});
const store = configureStore({
  reducer,
  middleware: [thunk],
});

export default store;
