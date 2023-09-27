import React, { Fragment, useEffect } from "react";
import Product from "../../components/Product";
import PreLoader from "../../components/PreLoader";
import { useDispatch, useSelector } from "react-redux";
import { getSearchProducts } from "../../store/actions/searchActions";
import { useLocation } from "react-router-dom";
import { CgArrowLeft } from "react-icons/cg";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DynamicTitle from "../../utils/DynamicTitle";
function SearchProducts() {
  DynamicTitle("Men's Fashion | Search");
  const location = useLocation();
  let search = location.search
    ?.split("?")
    ?.filter((el) => el.includes("search"))[0]
    ?.split("=")[1];
  const dispatch = useDispatch();
  const { searchProducts, loading } = useSelector(
    (state) => state.searchReducer
  );

  useEffect(() => {
    if (search?.length > 2) {
      getSearchProducts(dispatch, search);
    }
  }, [search, dispatch]);

  return (
    <Fragment>
      <ToastContainer />
      {loading ? (
        <PreLoader />
      ) : (
        <Fragment>
          <div className="container mb-3 p-0">
            <Fragment>
              <h4 className="d-flex bg-white align-items-center shadow">
                <span
                  onClick={() => window.history.back()}
                  className="ms-4 my-1 border-hover-light px-1 rounded text-danger curser-pointer fs-6 px-0"
                >
                  <CgArrowLeft className="" />
                  GO BACK
                </span>
              </h4>
            </Fragment>
            {search?.length < 3 ? (
              <Fragment>
                <div className="py-5 my-5 bg-white shadow h-300">
                  <div className="d-flex justify-content-center h-100 align-items-center">
                    <div className="link-danger text-center fs-4">
                      Type Minimum 3 Character in the Input
                    </div>
                  </div>
                </div>
              </Fragment>
            ) : searchProducts?.length === 0 ? (
              <Fragment>
                <div className="py-5 my-5 bg-white shadow h-300">
                  <div className="d-flex justify-content-center h-100 align-items-center">
                    <div className="link-primary text-center fs-5">
                      Can't Find Any Products <br />
                      Or Give Ralated Products Input
                    </div>
                  </div>
                </div>
              </Fragment>
            ) : (
              <Fragment>
                <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 px-3 px-sm-0 mx-auto shadow mt-3">
                  {searchProducts?.map((el, i) => {
                    return (
                      <div
                        className="col p-2 bg-white position-relative"
                        key={i}
                      >
                        <Product {...el} />
                        {el.offer > 50 ? (
                          <div className="position-absolute top-10px left-10px bg-success text-white fs-10px px-2 rounded-start">
                            Offer {el.offer} %
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </Fragment>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}

export default SearchProducts;
