import axios from "../../api/axios";
import {
  categoriesRequest,
  categoriesSuccess,
  categoriesFail,
} from "../slices/categoriesReducer";
export const getCategories = async (dispatch, category) => {
  try {
    dispatch(categoriesRequest());
    const { data } = await axios.get(`/api/v1/products/${category}`);
    dispatch(categoriesSuccess(data));
  } catch (error) {
    dispatch(categoriesFail("cant get"));
  }
};
