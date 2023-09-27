import React, { Fragment, useEffect } from "react";
import Product from "../../components/Product";
import PreLoader from "../../components/PreLoader";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../store/actions/categoriesActions";
import { useParams } from "react-router-dom";
import { CgArrowLeft } from "react-icons/cg";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DynamicTitle from "../../utils/DynamicTitle";
function AllProduct() {
  DynamicTitle("Men's Fashion | Category Products");
  const dispatch = useDispatch();
  const { category } = useParams();
  const { categoryProducts, loading } = useSelector(
    (state) => state.categoriesReducer
  );
  useEffect(() => {
    getCategories(dispatch, category);
  }, [category, dispatch]);

  return (
    <Fragment>
      <ToastContainer />
      {loading ? (
        <PreLoader />
      ) : (
        <Fragment>
          <div className="container my-3 p-0">
            <h4 className="d-flex my-3 bg-white align-items-center shadow">
              <span
                onClick={() => window.history.back()}
                className="ms-4 my-1 border-hover-light px-1 rounded text-danger curser-pointer fs-6 px-0"
              >
                <CgArrowLeft className="" />
                GO BACK
              </span>
            </h4>
            {!categoryProducts ? (
              <Fragment>
                <div className="py-5 my-5 bg-white shadow h-300">
                  <div className="d-flex justify-content-center h-100 align-items-center">
                    <div className="link-danger">Cant find products</div>
                  </div>
                </div>
              </Fragment>
            ) : (
              <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 px-3 px-sm-0 mx-auto shadow mt-3 py-4 bg-white">
                {categoryProducts &&
                  categoryProducts.map((el, i) => {
                    return (
                      <div className="col p-2  position-relative" key={i}>
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
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}

export default AllProduct;
