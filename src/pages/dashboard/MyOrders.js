import React, { Fragment, useEffect, useState } from "react";
import axios from "../../api/axios";
import { useSelector } from "react-redux";
import { CgArrowLeft } from "react-icons/cg";
import MyOrderComponent from "../../components/MyOrderComponent";
import { useNavigate } from "react-router-dom";
import DynamicTitle from "../../utils/DynamicTitle";
function MyOrders() {
  DynamicTitle("Men's Fashion | My Orders");
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.authReducer);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (user) {
      axios
        .post("/user/getuserorders", { user_id: user._id })
        .then((res) => {
          setOrders(res.data.orders);
        })
        .catch((err) => console.log(err.message));
    }
  }, [user]);
  return (
    <div>
      <div className="container">
        <h4 className="d-flex bg-white align-items-center container shadow ">
          <span
            onClick={() => window.history.back()}
            className="ms-4 my-1 text-nowrap border-hover-light px-1 rounded text-danger curser-pointer fs-6 px-0"
          >
            <CgArrowLeft className="" />
            GO BACK
          </span>
          <p className="fs-5 ps-4 pt-3 w-75">Your Orders</p>
        </h4>
        {!orders.length > 0 ? (
          <Fragment>
            <div className="container mb-2 py-5 bg-white shadow mt-4">
              <div className="py-5 my-5">
                <div className="text-center py-3 fs-5">
                  You don't have placed any placed Orders
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
          <Fragment>
            {orders?.map((order, i) => (
              <MyOrderComponent {...order} key={i} />
            ))}
          </Fragment>
        )}
      </div>
    </div>
  );
}

export default MyOrders;
