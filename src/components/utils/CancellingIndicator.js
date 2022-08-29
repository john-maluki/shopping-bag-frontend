import React from "react";
import { RotatingLines } from "react-loader-spinner";

const CancellingIndicator = ({ title }) => {
  return (
    <div className="canceling-indicator">
      <p>{title}...</p>
      <RotatingLines strokeColor="red" width="30" animationDuration="1" />
    </div>
  );
};

export default CancellingIndicator;
