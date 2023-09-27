import axios from "../../api/axios";
import {
  productsRequest,
  productsSuccess,
  productsFail,
} from "../slices/productsReducer";
export const getProducts = async (dispatch) => {
  try {
    dispatch(productsRequest());
    const { data } = await axios.get("/api/v1/products");
    dispatch(productsSuccess(data));
  } catch (error) {
    dispatch(productsFail("cant get"));
  }
};
