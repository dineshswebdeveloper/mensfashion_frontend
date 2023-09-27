import React from "react";
import MyOrderProductComponent from "./MyOrderProductComponent";

function MyOrderComponent(props) {
  const date = new Date(props.orderedDate);
  const day = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
  const threeDays = new Date(props.orderedDate + 3 * 24 * 60 * 60 * 1000);
  return (
    <div className="bg-white shadow mb-2 border-bottom">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 mx-auto py-2 border-bottom shadow-sm">
        <h6 className=" mb-1 col d-flex align-items-center">
          <span className="link-light fs-14px bg-primary px-3 py-1 shadow-sm me-2">{props?.orderedDate}</span>
          <span className="w-100 text-center text-success fw-bold fs-14px">Rs.{props.orderedProductsAmount-props.orderedProductsDiscountAmount}.00</span>
          <span className="text-decoration-line-through w-100 text-muted fs-14px ps-2">Rs.{props.orderedProductsAmount}.00</span>
        </h6>

        <h6 className="my-1 col fs-14px ">
          Ordered by : 
          <span className="link-success">{" "}
            {day[date?.getDay()]} , {date?.getDate()}
            <sup>th</sup> {date?.getMonth()+1} {date.getFullYear()}
          </span>
        </h6>
        <h6 className="my-1 col fs-14px">
          Delivery Expected by : 
          <span className="link-warning fs-14px"> {day[threeDays?.getDay()]} , {threeDays?.getDate()}
            <sup>th</sup> {threeDays?.getMonth()+1} {threeDays.getFullYear()}
          </span>
        </h6>
      </div>
      <div className="row row-cols-1 row-cols-md-2 px-2">
        {props.orderedProducts?.map((product, i) => (
          <div className="col pt-2 " key={i}>
            <MyOrderProductComponent {...product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyOrderComponent;
