import React from "react";

export const PopUpAction = ({ children, title }) => {
  return (
    <li>
      <div className="flex-row">
        <p>{title}</p>
        <div>{children}</div>
      </div>
    </li>
  );
};
