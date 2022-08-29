import React from "react";
import { RotatingLines } from "react-loader-spinner";

const LoadingIndicator = ({ children, loading, width, color, duration }) => {
  if (loading) {
    return (
      <div className="loader-indicator">
        <RotatingLines
          strokeColor={color ? color : "#00c2ff"}
          width={width ? width : "50"}
          animationDuration={duration ? duration : "1"}
        />
      </div>
    );
  } else {
    return children;
  }
};

export default LoadingIndicator;
