import React, { Fragment } from "react";
import { CgArrowLeft } from "react-icons/cg";
import { useSelector } from "react-redux";
import CartProduct from "../../components/CartProduct";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DynamicTitle from "../../utils/DynamicTitle";
function Cart() {
  DynamicTitle("Men's Fashion | Cart");
  const navigate = useNavigate();
  const {
    cartList,
    cartListTotalAmount,
    cartListTotalCount,
    cartListTotalDiscountAmount,
  } = useSelector((state) => state.cartReducer);
  return (
    <Fragment>
      <ToastContainer />
      <h4 className="d-flex bg-white align-items-center container shadow">
        <span
          onClick={() => window.history.back()}
          className="ms-4 my-1 border-hover-light px-1 rounded text-danger curser-pointer fs-6 px-0"
        >
          <CgArrowLeft className="" />
          GO BACK
        </span>
      </h4>
      {cartList.length < 1 ? (
        <Fragment>
          <div className="container mb-2 py-5 bg-white shadow mt-4">
            <div className="py-5 my-5">
              <div className="text-center py-3 fs-5">Your Cart is Empty</div>
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
        <Fragment>
          <div className="container mb-2 row row-cols-1 row-cols-md-2 mx-auto p-0 my-md-5 my-2">
            <div className="d-flex flex-column bg-light col-12 col-md-8">
              {cartList &&
                cartList.map((el, i) => {
                  return <CartProduct {...el} key={i} />;
                })}
            </div>
            <div className=" mt-2 mt-md-0 col-12 col-md-4  sticky-top h-100">
              <div className="bg-white shadow p-2 ">
                <h5 className="fw-bold pb-2">Price Details</h5>
                <h6 className="d-flex justify-content-between">
                  <span>Price {`(${cartListTotalCount} items)`}</span>
                  <span> Rs.{cartListTotalAmount}</span>
                </h6>
                <h6 className="d-flex justify-content-between">
                  <span>Discount</span>
                  <span className="text-success">
                    -Rs.
                    {cartListTotalDiscountAmount}
                  </span>
                </h6>
                <h6 className="d-flex justify-content-between">
                  <span>Delivery Charges</span>
                  <span className="text-success text-end">FREE Delivery</span>
                </h6>
                <hr />
                <h6 className="fw-bold d-flex justify-content-between">
                  <span>Total amount</span>
                  <span>
                    Rs.{cartListTotalAmount - cartListTotalDiscountAmount}.00
                  </span>
                </h6>
                <hr />
                <h6 className="text-success">
                  You will save Rs.{cartListTotalDiscountAmount} on this order
                </h6>
              </div>
              <div className="text-end mt-1 mt-md-0 sticky-bottom bg-white shadow border-top">
                <span
                  className="btn btn-warning p-1 rounded-0 "
                  onClick={() =>
                    navigate(
                      `/cart/placeorder?placeorder=${cartListTotalAmount}`
                    )
                  }
                >
                  Check Out
                </span>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}

export default Cart;
