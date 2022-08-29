import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const DeleteTrashAction = () => {
  return (
    <div className="delete">
      <FontAwesomeIcon
        icon={solid("trash")}
        size="1x"
        color="red"
        title="delete"
      />
    </div>
  );
};

export default DeleteTrashAction;
