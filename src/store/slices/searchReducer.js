import { createSlice } from "@reduxjs/toolkit";
const searchReducer = createSlice({
  name: "search",
  initialState: { loading: false, searchProducts: [] },
  reducers: {
    searchRequest: () => {
      return { loading: true };
    },
    searchSuccess: (state, { payload }) => {
      return {
        loading: false,
        searchProducts: payload,
      };
    },
    searchFail: (state, { payload }) => {
      return {
        loading: false,
        error: payload,
      };
    },
  },
});
export const { searchRequest, searchSuccess, searchFail } =
  searchReducer.actions;
export default searchReducer.reducer;
