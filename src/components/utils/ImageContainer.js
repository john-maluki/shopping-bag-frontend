import React from "react";

const ImageConatainer = (props) => {
  return (
    <div className="image-container">
      {props.productImage && (
        <img
          src={props.productImage}
          alt="Product img"
          width="150px"
          height="200px"
        />
      )}
    </div>
  );
};

export default ImageConatainer;
