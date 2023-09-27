import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { BsBagCheck } from "react-icons/bs";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { AiOutlineClose } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { RxHamburgerMenu } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";
import { signout } from "../store/slices/authReducer";
import SearchComponent from "./SearchComponent";
function Navbar() {
  const cartList = useSelector((state) => state.cartReducer.cartList);
  const { user } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const humBurgerToggle = (e) => {
    const burger = document.getElementById("Nav_main");
    burger.classList.toggle("Nav_main_display");
  };
  const humBurgerRemove = () => {
    const burger = document.getElementById("Nav_main");
    burger.classList.remove("Nav_main_display");
  };

  return (
    <div className=" bg-white mb-2 position-relative">
      <div className="container d-flex align-items-center pt-2 row-cols-2 row-cols-lg-3 flex-wrap flex-lg-nowrap justify-contents-between mb-2">
        <Fragment>
          <Link
            to="/"
            className="py-1 fs-4 fw-bold text-nowrap order-0 col ps-2 col-lg-3 col-xl-2"
          >
            Men's <span className="text-danger">Fashion</span>
          </Link>
        </Fragment>
        <div className="d-flex flex-nowrap justify-content-end justify-content-xl-end order-1 order-lg-2 col py-1 ">
          <Fragment>
            {!user ? (
              <Link
                to="/login"
                className="d-sm-flex align-items-center d-none "
              >
                <div className="fs-4 px-1 text-danger">
                  <CiUser />
                </div>
                <div className="d-none d-sm-block pt-1">Login</div>
              </Link>
            ) : (
              <Link className="d-sm-flex align-items-center d-none ">
                <div className="fs-4 px-1 text-danger">
                  <CiUser />
                </div>
                <div
                  className="d-none d-sm-block pt-1 capitalise"
                  onClick={() => dispatch(signout())}
                >
                  {user?.name}
                </div>
              </Link>
            )}
          </Fragment>
          <Link
            to="/myorders"
            className="d-xl-flex align-items-center d-none ms-3"
          >
            <div className="fs-5 pb-1 px-1 text-danger">
              <BsBagCheck />
            </div>
            <div className="d-none d-xl-block pt-1 text-nowrap">My Orders</div>
          </Link>
          <Link
            to="/cart"
            className="d-flex align-items-center  position-relative ms-3"
          >
            <div className="fs-4 px-1 text-danger">
              <PiShoppingCartSimpleLight />
            </div>
            <div className="d-none d-lg-block pt-1">Cart</div>
            {cartList?.length > 0 ? (
              <span className="bg-danger rounded-pill badge position-absolute top-0 start-100 fs-10px">
                {cartList?.length}
              </span>
            ) : null}
          </Link>
          <Link className="d-flex align-items-center ">
            <div className="fs-4 ms-4 text-danger scale-1">
              <RxHamburgerMenu onClick={humBurgerToggle} />
            </div>
          </Link>
        </div>
        <Fragment>
          <div className="order-2 mx-auto order-lg-1 col-10 col-md-7">
            <SearchComponent />
          </div>
        </Fragment>
      </div>
      <Fragment>
        <div
          className="position-fixed w-100 Nav_main d-flex justify-content-end container-xxl p-0"
          id="Nav_main"
          onClick={humBurgerRemove}
        >
          <div
            className="col-10 col-sm-5 col-md-5 col-lg-3 col-xl-3 bg-white Nav_sub min-vh-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="pt-4 pb-4 d-flex justify-content-between">
              <Link
                to="/"
                className="fs-4 fw-bold text-nowrap ps-3"
                onClick={humBurgerRemove}
              >
                Men's <span className="text-danger">Fashion</span>
              </Link>
              <span className="curser-pointer me-3 fs-4 scale-1">
                <AiOutlineClose onClick={humBurgerToggle} />
              </span>
            </div>
            <div className="text-center mb-4">
              <div className="fs-1 mb-3">
                <VscAccount />
              </div>
              <div>
                {!user ? (
                  <Link
                    to="/login"
                    className="btn btn-danger rounded-0 text-white px-3 py-1"
                    onClick={humBurgerRemove}
                  >
                    Login
                  </Link>
                ) : (
                  <span className="link-primary capitalise fs-5 curser-pointer">
                    {user?.name}
                  </span>
                )}
              </div>
            </div>
            <div className="px-4 mb-3">
              <Link
                to="/products"
                className="hover-danger"
                onClick={humBurgerRemove}
              >
                All Products
              </Link>
            </div>
            <div className="px-4 mb-3">
              <Link
                to="/myorders"
                className="hover-danger"
                onClick={humBurgerRemove}
              >
                My Orders
              </Link>
            </div>
            <div className="px-4 mb-3 ">
              <Link
                to="/cart"
                className="hover-danger"
                onClick={humBurgerRemove}
              >
                My Cart
              </Link>
            </div>
            <div className="px-4 mb-3">
              <Link
                to="/wishlist"
                className="hover-danger"
                onClick={humBurgerRemove}
              >
                Wishlist
              </Link>
            </div>
            {user && (
              <div className="px-4 mb-3">
                <Link
                  className="hover-danger"
                  onClick={() => {
                    dispatch(signout());
                    humBurgerRemove();
                  }}
                >
                  LogOut
                </Link>
              </div>
            )}
          </div>
        </div>
      </Fragment>
    </div>
  );
}

export default Navbar;
