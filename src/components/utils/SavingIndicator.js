import React from "react";
import { RotatingLines } from "react-loader-spinner";

const SavingIndicator = ({ title }) => {
  return (
    <div className="saving-indicator">
      <p>{title}...</p>
      <RotatingLines strokeColor="#00c2ff" width="30" animationDuration="1" />
    </div>
  );
};

export default SavingIndicator;
