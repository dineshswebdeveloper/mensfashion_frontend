import React from "react";
import { useNavigate } from "react-router-dom";

function Product(props) {
  const titleArr = props.title.split(" ");
  const navigate = useNavigate()
  return (
    <div className="border rounded-10 shadow-sm ">
      <div className="p-2 text-center overflow-hidden">
        {props?.image &&<img
          src={`https://mensfashion-1u69.onrender.com/${props.category}/${props.image}`}
          alt=""
          style={{
            maxWidth: "180px",
            maxHeight: "150px",
            objectFit: "cover",
            width: "100%",
            borderRadius: "10px",
          }}
          className="zoom-hover curser-pointer"
          onClick={()=>navigate(`/product/${props._id}`)}
        />}
      </div>
      <div className="p-0 text-center overflow-hidden">
        <h6 className="p-0 capitalise curser-pointer" onClick={()=>navigate(`/product/${props._id}`)}>{props.brand}</h6>
        <h6 className="p-0 fs-10px text-nowrap">{`${titleArr[0]} ${titleArr[1]} ${props.category}`}</h6>
      </div>
    </div>
  );
}

export default Product;
