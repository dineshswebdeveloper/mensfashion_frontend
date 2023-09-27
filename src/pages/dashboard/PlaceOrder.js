import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "../../api/axios";
import { useLocation, useNavigate } from "react-router-dom";
import { initCart } from "../../store/slices/cartReducer";
import { ToastContainer, toast } from "react-toastify";
import DynamicTitle from "../../utils/DynamicTitle";
function PlaceOrder() {
  DynamicTitle("Men's Fashion | Place Order");
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const buyingAmount = location.search.split("=")[1];
  const cart = useSelector((state) => state.cartReducer);
  const { user } = useSelector((state) => state.authReducer);
  const [resStatus, setResStatus] = useState("no product");
  useEffect(() => {
    if (
      cart.cartListTotalAmount === Number(buyingAmount) &&
      cart.cartListTotalAmount > 0
    ) {
      setResStatus("ready to order");
    }
  }, [cart, buyingAmount]);
  const [orderedDate, setOrderedDate] = useState(0);
  const day = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
  const threeDays = new Date(orderedDate + 3 * 24 * 60 * 60 * 1000);
  const handlePlaceOrder = () => {
    if (cart?.cartList.length > 0) {
      axios
        .post(`/user/orders`, { userId: user._id, ...cart })
        .then((res) => {
          if (res.data.status === "product ordered") {
            dispatch(initCart());
            setOrderedDate(
              res.data.orders[res.data.orders.length - 1].orderedDate
            );
            setResStatus("product ordered");
            toast.success("Your Order Placed", {
              position: "bottom-center",
              autoClose: 5000,
              closeOnClick: true,
              theme: "dark",
              pauseOnHover: true,
            });
          }
        })
        .catch((err) => console.log(err.message));
    }
  };

  return (
    <Fragment>
      <ToastContainer />
      <div className="container">
        {resStatus === "no product" ? (
          <Fragment>
            <div className="container mb-2 py-5 bg-white shadow mt-4 h-100">
              <div className="py-5 my-5">
                <div className="text-center py-3 fs-5">
                  Your cart is empty . <br /> So you can't Confirm Place Order
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
        ) : resStatus === "ready to order" ? (
          <Fragment>
            <div className="py-5 my-5 bg-white shadow h-300">
              <div className="d-flex justify-content-center h-100 align-items-center">
                <div
                  className="btn btn-warning "
                  onClick={() => handlePlaceOrder()}
                >
                  Confirm to Place Order
                </div>
              </div>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <div className="py-5 my-5 bg-white shadow px-5">
              <h6 className="mb-4 fw-bold">Hi Customer,</h6>
              <h6 className="mb-2 fw-bold">Order Successfully Placed</h6>
              <h6 className="mb-3 fs-14px">
                Your order will be delivered bt{" "}
                <span className="link-warning fs-14px">
                  {" "}
                  {day[threeDays?.getDay()]} , {threeDays?.getDate()}
                  <sup>th</sup> {threeDays?.getMonth() + 1}{" "}
                  {threeDays.getFullYear()}
                </span>
                .
              </h6>
              <h6 className="mb-2 fs-14px pe-3">
                We are pleased to confirm your order no {orderedDate}.
              </h6>
              <h6 className="mb-3 fs-14px">
                Thank you for shopping with Men's Fashion!
              </h6>
              <h6>
                <span
                  onClick={() => navigate("/myorders")}
                  className="btn btn-primary py-1 rounded-0 shadow"
                >
                  Go to my Order
                </span>
              </h6>
            </div>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
}

export default PlaceOrder;
