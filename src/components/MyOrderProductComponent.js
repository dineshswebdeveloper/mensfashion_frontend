import React from "react";
function MyOrderProductComponent(props) {
  return (
    <div className="d-flex flex-row border-bottom mx-auto overflow-hidden">
      <div className="col-4">
        <img
          src={`https://mensfashion-1u69.onrender.com/${props.category}/${props.image}`}
          alt=""
          className="rounded bg-light p-1 curser-pointer"
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
      <div className="col pb-2">
        <h6 className="mb-1 fw-bold">{props.brand}</h6>
        <h6 className="mb-1 fs-14px text-nowrap">{props.title}</h6>
        <h6 className="mb-1 fs-14px">{props.count} piece</h6>
        <h6 className="mb-1 fs-14px text-success">
          Rs.{" "}
          {props.totalamount -
            (props.totalamount * (props.offer / 100)).toFixed()}
          .00
        </h6>
        <h6 className="fs-14px">{props.color} color</h6>
      </div>
    </div>
  );
}

export default MyOrderProductComponent;
