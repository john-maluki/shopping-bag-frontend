import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const UntrashAction = () => {
  return (
    <div className="undo">
      <FontAwesomeIcon
        icon={solid("undo")}
        size="1x"
        color="green"
        title="undo"
      />
    </div>
  );
};

export default UntrashAction;
