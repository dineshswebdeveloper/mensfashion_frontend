import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../store/actions/productActions";
import { useParams } from "react-router-dom";
import PreLoader from "../../components/PreLoader";
import { CgArrowLeft } from "react-icons/cg";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import Star from "../../components/Star";
import { addToCart } from "../../store/slices/cartReducer";
import { useNavigate } from "react-router-dom";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../store/slices/wishlistReducer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DynamicTitle from "../../utils/DynamicTitle";
function SingleProduct() {
  DynamicTitle("Men's Fashion | Product");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  let productOfferdPrice;
  const { product, loading } = useSelector((state) => state.productReducer);
  const cartList = useSelector((state) => state.cartReducer.cartList);
  const { wishList } = useSelector((state) => state.wishlistReducer);
  useEffect(() => {
    getProduct(dispatch, id);
  }, [id, dispatch]);
  if (product) {
    productOfferdPrice = Math.ceil(
      product.price - (product.price * product.offer) / 100
    );
  }
  return (
    <Fragment>
      <ToastContainer />
      {loading ? (
        <PreLoader />
      ) : (
        product && (
          <Fragment>
            <h4 className="d-flex bg-white align-items-center container shadow">
              <span
                onClick={() => window.history.back()}
                className="ms-4 my-1 border-hover-light px-1 rounded text-danger curser-pointer fs-6 px-0"
              >
                <CgArrowLeft className="" />
                GO BACK
              </span>
            </h4>
            <div className="d-flex justify-content-center container py-4">
              <div className="row mx-auto row-cols-1 row-cols-sm-2 py-0 py-sm-4 bg-white shadow">
                <div className="col col-sm-5 text-center my-3 mt-sm-0">
                  <img
                    src={`https://mensfashion-1u69.onrender.com/${product.category}/${product.image}`}
                    alt=""
                    style={{
                      maxWidth: "200px",
                      objectFit: "cover",
                      width: "100%",
                      borderRadius: "10px",
                    }}
                  />
                </div>
                <div className="col col-sm-7">
                  <h4>{product.brand.toUpperCase()}</h4>
                  <h6>{product.title}</h6>
                  <h6 className="d-flex">
                    <span>
                      <Star ratings={product.ratings} />
                    </span>
                    <span className="fs-10px align-self-end ps-1">{`(${product.ratings})`}</span>
                  </h6>
                  <hr />
                  <h6>
                    <span className="fw-bold pe-3">
                      Rs.{product && productOfferdPrice}.00
                    </span>
                    <span className="text-muted text-decoration-line-through pe-3">
                      Rs.{product.price}
                    </span>
                    <span className="text-warning">{product.offer}%</span>
                  </h6>
                  <h6 className="d-flex">
                    <span className="pe-2 fw-bold">Color :</span>
                    <span className="capitalise">{product.color}</span>
                  </h6>
                  <h6 className="d-flex">
                    <span className="pe-2 fw-bold">Size :</span>
                    <span className="capitalise">{product.size}</span>
                  </h6>
                  <hr />
                  <h5>
                    {cartList?.find((el) => el._id === product._id) ? (
                      <span
                        className="btn btn-warning py-1"
                        onClick={() => navigate(`/cart`)}
                      >
                        Go to Cart
                      </span>
                    ) : (
                      <span
                        className="btn btn-success py-1"
                        onClick={() => dispatch(addToCart(product))}
                      >
                        Add to Cart
                      </span>
                    )}
                    {wishList?.find((el) => el._id === product._id) ? (
                      <span
                        className="ms-3 fs-3 text-primary"
                        onClick={() => dispatch(removeFromWishlist(product))}
                      >
                        <AiFillHeart />
                      </span>
                    ) : (
                      <span
                        className="ms-3 fs-3 text-danger"
                        onClick={() => dispatch(addToWishlist(product))}
                      >
                        <AiOutlineHeart />
                      </span>
                    )}
                  </h5>
                  <hr />
                  <h6 className="d-flex flex-nowrap">
                    <span className="col-5 fw-bold pe-2">Product Details:</span>
                    <span className="col-7 fs-14px lh-base">
                      {product.productdetails}
                    </span>
                  </h6>
                  <h6 className="d-flex flex-nowrap">
                    <span className="col-5 fw-bold pe-2">
                      Material And Care:
                    </span>
                    <span className="col-7 fs-14px lh-base">
                      {product.materialandcare}
                    </span>
                  </h6>
                </div>
              </div>
            </div>
          </Fragment>
        )
      )}
    </Fragment>
  );
}

export default SingleProduct;
