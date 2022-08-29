import React from "react";
import ImageContainer from "../utils/ImageContainer";

const Product = (props) => {
  return (
    <div className="product-card">
      <p>{`${props.name}`.toUpperCase()}</p>
      <ImageContainer productImage={props.productImage} />
      <h2 className="brand" title="brand">
        {props.brand}
      </h2>
      <p className="name">{props.description}</p>
    </div>
  );
};

export default Product;
