import React from "react";
import DeleteTrashAction from "./DeleteTrashAction";
import UntrashAction from "./UntrashAction";

const TrashActions = () => {
  return (
    <div className="action-per-item">
      <UntrashAction />
      <DeleteTrashAction />
    </div>
  );
};

export default TrashActions;
