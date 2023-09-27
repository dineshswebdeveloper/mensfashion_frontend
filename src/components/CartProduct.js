import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { GoTrash } from "react-icons/go";
import {
  removeFromCart,
  modifyCartQuantity,
} from "../store/slices/cartReducer";
import {
  addToWishlist,
  removeFromWishlist,
} from "../store/slices/wishlistReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function CartProduct(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { wishList } = useSelector((state) => state.wishlistReducer);
  let productOfferedPrice;
  if (props) {
    productOfferedPrice = Math.ceil(
      props.price - (props.price * props.offer) / 100
    );
  }
  const degrementCount = () => {
    if (props.count === 1) {
      dispatch(removeFromCart(props));
    } else {
      dispatch(modifyCartQuantity({ ...props, count: props.count - 1 }));
    }
  };
  return (
    <div className="d-flex flex-column bg-white w-100 p-2 mb-2 shadow">
      <div className="d-flex flex-row ">
        <div className="col-4 d-flex flex-column ">
          <div className=" mb-2 text-center">
            <img
              src={`https://mensfashion-1u69.onrender.com/${props.category}/${props.image}`}
              alt=""
              className="rounded bg-light p-1 curser-pointer"
              onClick={() => navigate(`/product/${props._id}`)}
              style={{
                width: "100%",
                height: "100%",
                maxWidth: "100px",
                maxHeight: "100px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </div>
          <h6 className="mt-2 text-center">
            <span
              className="rounded bg-light px-1 curser-pointer py-0 fs-14 px me-2"
              onClick={() =>dispatch(modifyCartQuantity({ ...props, count: props.count + 1 }))}>+</span>
            <span className="border py-0 px-3">{props.count}</span>
            <span className="rounded bg-light px-1 curser-pointer fs-14 py-0 ms-2" onClick={() => degrementCount()}>-</span>
          </h6>
        </div>
        <div className="p-2 col-8">
          <h6 className="fw-bold curser-pointer" onClick={() => navigate(`/product/${props._id}`)}>{props.brand.toUpperCase()}</h6>
          <h6 className="fs-14px">{props.title}</h6>
          <h6 className="fs-14px">{props.color}</h6>
          <h6 className="fs-14px">
            <span className="fw-bold pe-2">
              Rs.{props && productOfferedPrice * props.count}.00
            </span>
            <span className="text-muted text-decoration-line-through pe-2">
              Rs.{props.price * props.count}
            </span>
            <span className="text-warning">{props.offer}%</span>
          </h6>
        </div>
      </div>
      <div className="pt-1 border-top d-flex">
        {wishList?.find((el) => el._id === props._id) ? (
          <span className="col text-end pe-2 pe-sm-4 ">
            <span
              onClick={() => dispatch(removeFromWishlist(props))}
              className="hover-danger curser-pointer w-100"
            >
              <GoTrash />
              remove From Wishlist
            </span>
          </span>
        ) : (
          <span className="col text-end pe-2 pe-sm-4  ">
            <span
              className="hover-warning curser-pointer w-100"
              onClick={() => dispatch(addToWishlist(props))}
            >
              <AiOutlineHeart />
              Move to Wishlist
            </span>
          </span>
        )}
        <span className="col text-start ps-2 ps-sm-4 ">
          <span
            className="hover-danger curser-pointer w-100"
            onClick={() => dispatch(removeFromCart(props))}
          >
            <GoTrash /> Remove
          </span>
        </span>
      </div>
    </div>
  );
}

export default CartProduct;
