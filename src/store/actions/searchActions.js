import axios from "../../api/axios";
import {
  searchRequest,
  searchSuccess,
  searchFail,
} from "../slices/searchReducer";
export const getSearchProducts = async (dispatch, search) => {
  try {
    dispatch(searchRequest());
    const { data } = await axios.get(`/api/v1/products/search/${search}`);
    dispatch(searchSuccess(data));
  } catch (error) {
    dispatch(searchFail("cant get"));
  }
};
