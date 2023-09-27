import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
function Star(props) {
  const ratings = String(props.ratings);
  const stars = ratings.split(".");
  let element = "";
  for (let i = 0; i < stars[0]; i++) {
    element += 1;
  }
  const eleArr = element.split("");
  return (
    <div>
      {eleArr &&
        eleArr.map((el, i) => <BsStarFill className="text-warning" key={i} />)}
      {stars[1] && stars[1] ? <BsStarHalf className="text-warning" /> : null}
    </div>
  );
}

export default Star;
