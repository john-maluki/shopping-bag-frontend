import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const ActionPopUpPane = ({ children }) => {
  const [showPanel, setshowPanel] = useState(false);
  const togglePanelVisibility = () => {
    setshowPanel(!showPanel);
  };
  return (
    <div className="flex-row action" onClick={togglePanelVisibility}>
      <p>Action</p>
      <div>
        <FontAwesomeIcon icon={solid("caret-down")} size="1x" />
      </div>
      <div className={`action-panel ${showPanel ? "element-visible" : ""}`}>
        <div className="action-list">
          <ul>{children}</ul>
        </div>
      </div>
    </div>
  );
};

export default ActionPopUpPane;
