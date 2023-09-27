import axios from "../../api/axios";
import {
  productRequest,
  productSuccess,
  productFail,
} from "../slices/productReducer";
export const getProduct = async (dispatch, id) => {
  try {
    dispatch(productRequest());
    const { data } = await axios.get(
      `https://mensfashion-1u69.onrender.com/api/v1/product/${id}`
    );
    dispatch(productSuccess(data));
  } catch (error) {
    dispatch(productFail("cant get"));
  }
};
