import { createSlice } from "@reduxjs/toolkit";
const productReducer = createSlice({
  name: "product",
  initialState: { loading: false },
  reducers: {
    productRequest: (state, { payload }) => {
      return { loading: true };
    },
    productSuccess: (state, { payload }) => {
      return {
        loading: false,
        product: payload,
      };
    },
    productFail: (state, { payload }) => {
      return {
        loading: false,
        error: payload,
      };
    },
  },
});
export const { productRequest, productSuccess, productFail } =
  productReducer.actions;
export default productReducer.reducer;
