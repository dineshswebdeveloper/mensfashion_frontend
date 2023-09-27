import { createSlice } from "@reduxjs/toolkit";
const categoriesReducer = createSlice({
  name: "categories",
  initialState: { loading: false },
  reducers: {
    categoriesRequest: (state, { payload }) => {
      return { loading: true };
    },
    categoriesSuccess: (state, { payload }) => {
      return {
        loading: false,
        categoryProducts: payload,
      };
    },
    categoriesFail: (state, { payload }) => {
      return {
        loading: false,
        error: payload,
      };
    },
  },
});
export const { categoriesRequest, categoriesSuccess, categoriesFail } =
  categoriesReducer.actions;
export default categoriesReducer.reducer;
