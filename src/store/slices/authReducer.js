import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const authReducer = createSlice({
  name: "auth",
  initialState: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : { loading: false, isAuthorised: false },
  reducers: {
    authRequest: (state) => {
      return { ...state, loading: true };
    },
    authSuccess: (state, { payload }) => {
      localStorage.setItem(
        "user",
        JSON.stringify({
          loading: false,
          isAuthorised: true,
          user: payload,
        })
      );

      return {
        loading: false,
        isAuthorised: true,
        user: payload,
      };
    },
    authFail: (state, { payload }) => {
      return {
        loading: false,
        error: payload,
      };
    },
    signout: () => {
      localStorage.setItem(
        "user",
        JSON.stringify({
          loading: false,
          isAuthorised: false,
        })
      );
      toast.success("Your are Account signout", {
        position: "bottom-center",
        autoClose: 3000,
        closeOnClick: true,
        theme: "dark",
        pauseOnHover: true,
      });
      return {
        loading: false,
        isAuthorised: false,
      };
    },
  },
});
export const { authRequest, authSuccess, authFail, signout } =
  authReducer.actions;
export default authReducer.reducer;
