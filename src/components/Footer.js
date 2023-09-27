import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Fragment>
      <div className="bg-white mt-3">
        <div className="row row-cols-1 row-cols-md-3 mx-auto container pt-5 pb-3 px-lg-5 px-lg-4 justify-content-around ">
          <div className="col col-md-5 ">
            <h5 className="text-danger">About</h5>
            <p className="fs-14px pe-4">
              This is the E-commerce website for Buying only Mens fashion
              Products like Jeans Pants, Cotton Shirts, T-Shirts, Men's
              Shoes,Men's Wallets and Men's Fragrances.
            </p>
          </div>
          <div className="col col-md-4">
            <h5 className="text-danger">Contact</h5>
            <div>
              <h6 className="fs-14px">
                Steel Plant Main Road ,Salem ,Tamil Nadu,636030
              </h6>
              <h6 className="fs-14px">Phone : 8973992727</h6>
              <h6 className="fs-14px">Email: dineshs200@gmail.com</h6>
            </div>
          </div>
          <div className="col col-md-2 ">
            <h5 className="text-danger">Categories</h5>
            <div className="d-flex flex-column">
              <Link to={`/products/Footwear`} className="fs-14px hover-danger">Footwear</Link>
              <Link to={`/products/Shirts`} className="fs-14px hover-danger">Shirts</Link>
              <Link to={`/products/T-shirts`} className="fs-14px hover-danger">T-Shirts</Link>
              <Link to={`/products/Wallet`} className="fs-14px hover-danger">Wallets</Link>
              <Link to={`/products/Jeans Pants`} className="fs-14px hover-danger">Jeans Pants</Link>
              <Link to={`/products/Fragrances`} className="fs-14px hover-danger">Fragrances</Link>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg p-2 text-center fs-14px">
          @ 2022-2023 MensFashion.com
        </div>
      </div>
    </Fragment>
  );
}

export default Footer;
