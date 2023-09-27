import { createSlice } from "@reduxjs/toolkit";
const productsReducer = createSlice({
  name: "products",
  initialState: { loading: false },
  reducers: {
    productsRequest: (state, { payload }) => {
      return { loading: true };
    },
    productsSuccess: (state, { payload }) => {
      return {
        loading: false,
        products: payload,
      };
    },
    productsFail: (state, { payload }) => {
      return {
        loading: false,
        error: payload,
      };
    },
  },
});
export const { productsRequest, productsSuccess, productsFail } =
  productsReducer.actions;
export default productsReducer.reducer;
