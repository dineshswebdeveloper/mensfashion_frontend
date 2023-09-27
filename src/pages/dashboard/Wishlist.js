import React, { Fragment, useEffect, useState } from "react";
import Product from "../../components/Product";
import { useSelector } from "react-redux";
import { CgArrowLeft } from "react-icons/cg";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DynamicTitle from "../../utils/DynamicTitle";
function Wishlist() {
  DynamicTitle("Men's Fashion | Wishlists");
  const [list, setList] = useState([]);
  const { wishList } = useSelector((state) => state.wishlistReducer);
  useEffect(() => {
    setList(wishList);
  }, [wishList]);
  return (
    <Fragment>
      <ToastContainer />
      <Fragment>
        <div className="container mb-3 p-0">
          <h4 className="d-flex bg-white align-items-center shadow">
            <span
              onClick={() => window.history.back()}
              className="ms-4 my-1 border-hover-light px-1 rounded text-danger curser-pointer fs-6 px-0"
            >
              <CgArrowLeft className="" />
              GO BACK
            </span>
          </h4>
          {!list?.length > 0 ? (
            <Fragment>
              <div className="container mb-2 py-5 bg-white shadow mt-4">
                <div className="py-5 my-5">
                  <div className="text-center py-3 fs-5">
                    You don't have Wishlist Products
                  </div>
                  <div className="py-2 text-center">
                    <span
                      className="btn btn-primary"
                      onClick={() => navigate(`/products`)}
                    >
                      Continue Shoping
                    </span>
                  </div>
                </div>
              </div>
            </Fragment>
          ) : (
            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 px-3 px-sm-0 mx-auto shadow mt-3">
              {list?.map((el, i) => {
                return (
                  <div className="col p-2 bg-white position-relative" key={i}>
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
    </Fragment>
  );
}

export default Wishlist;
