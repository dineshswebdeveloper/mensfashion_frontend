import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const wishlistReducer = createSlice({
  name: "wishlist",
  initialState: {
    wishList: JSON.parse(localStorage.getItem("wishList")) || [],
  },
  reducers: {
    addToWishlist: (state, { payload }) => {
      state.wishList = [...state.wishList, payload];
      toast.success("product addded to wishlist", {
        position: "bottom-center",
        autoClose: 5000,
        closeOnClick: true,
        theme: "dark",
        pauseOnHover: true,
      });
      localStorage.setItem("wishList", JSON.stringify(state.wishList));
    },
    removeFromWishlist: (state, { payload }) => {
      state.wishList = state.wishList.filter((el) => el._id !== payload._id);
      toast.success("product romoved from wishlist", {
        position: "bottom-center",
        autoClose: 5000,
        closeOnClick: true,
        theme: "dark",
        pauseOnHover: true,
      });
      localStorage.setItem("wishList", JSON.stringify(state.wishList));
    },
  },
});
export const { addToWishlist, removeFromWishlist } = wishlistReducer.actions;
export default wishlistReducer.reducer;
