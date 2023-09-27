import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../../components/Banner";
import PreLoader from "../../components/PreLoader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DynamicTitle from "../../utils/DynamicTitle";
function Home() {
  DynamicTitle("Men's Fashion");
  const [init, setInit] = useState(true);
  setTimeout(() => {
    setInit(false);
  }, 500);
  return (
    <Fragment>
      <ToastContainer />
      {init ? (
        <PreLoader />
      ) : (
        <div className="">
          <div className="my-3 shadow container p-2 bg-light">
            <Banner />
          </div>
          <div className="container row mb-3 row-cols-1 row-cols-md-2 mx-auto bg-light round shadow px-1">
            <Link
              to={`/products/Shirts`}
              className="col-12 col-md-8 p-1  overflow-hidden rounded-10"
            >
              <img
                src="category/ShirtsCategory.jpg"
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                className="zoom-hover rounded-10"
              />
            </Link>
            <div className="col-md-4 d-flex flex-md-column">
              <Link
                to={`/products/Jeans Pants`}
                className="col p-1 overflow-hidden rounded-10"
              >
                <img
                  src="category/JeansPantsCategory.jpg"
                  alt=""
                  className="zoom-hover rounded-10"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Link>
              <Link
                to={`/products/Footwear`}
                className="col p-1 overflow-hidden rounded-10"
              >
                <img
                  src="category/ShoeCategory.jpg"
                  alt=""
                  className="zoom-hover rounded-10"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Link>
            </div>
          </div>
          <div className="container row mb-3 row-cols-1 row-cols-md-2 mx-auto bg-light round shadow px-1">
            <div className="col-md-4 d-flex flex-md-column">
              <Link
                to={`/products/Fragrances`}
                className="col p-1 overflow-hidden rounded-10"
              >
                <img
                  src="category/FragrancesCategory.jpg"
                  alt=""
                  className="zoom-hover rounded-10"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Link>
              <Link
                to={`/products/Wallet`}
                className="col p-1 overflow-hidden rounded-10"
              >
                <img
                  src="category/WalletCategory.jpg"
                  alt=""
                  className="zoom-hover rounded-10"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Link>
            </div>
            <Link
              to={`/products/T-shirts`}
              className="col-12 col-md-8 p-1 overflow-hidden rounded-10"
            >
              <img
                src="category/T-shirtsCategory.jpg"
                alt=""
                className="zoom-hover rounded-10"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Link>
          </div>
        </div>
      )}
    </Fragment>
  );
}
export default Home;
