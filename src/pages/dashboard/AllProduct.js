import React, { Fragment, useEffect } from "react";
import Product from "../../components/Product";
import PreLoader from "../../components/PreLoader";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/actions/productsActions";
import { CgArrowLeft } from "react-icons/cg";
import DynamicTitle from "../../utils/DynamicTitle";
function AllProduct() {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.productsReducer);
  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);
  DynamicTitle("Men's Fashion | Products");
  return (
    <Fragment>
      {loading ? (
        <PreLoader />
      ) : (
        <Fragment>
          <div className="container p-0">
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
            {!products ? (
              <Fragment>
                <div className="py-5 my-5 bg-white shadow h-300">
                  <div className="d-flex justify-content-center h-100 align-items-center">
                    <div className="link-danger">Check your internet</div>
                  </div>
                </div>
              </Fragment>
            ) : (
              <Fragment>
                <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 px-3 px-sm-0 mx-auto">
                  {products &&
                    products.map((el, i) => {
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

export default AllProduct;
