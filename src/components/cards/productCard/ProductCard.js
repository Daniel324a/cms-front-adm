import React from "react";

import "./productCard.css";

export const ProductCard = ({ handler = () => {} }) => {
  return (
    <div className="btn">
      <div
        className="card m-2 card-item"
        style={{ width: "18rem" }}
        onClick={() => handler({ hola: "mundo" })}
      >
        <img
          src="https://d2skuhm0vrry40.cloudfront.net/2020/articles/2020-05-25-14-05/-1590411928298.jpg/EG11/thumbnail/750x422/format/jpg/quality/60"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
};
