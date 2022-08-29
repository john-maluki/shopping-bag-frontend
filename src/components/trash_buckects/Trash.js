import React from "react";
import ActionPopUpPane from "../utils/ActionPopUpPane";
import { PopUpAction } from "../utils/PopUpAction";
import TrashedShoppingBags from "./TrashedShoppingBags";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const Trash = () => {
  return (
    <main>
      <div className="flex-row trash-header">
        <p>...Trash Bucket</p>
        <ActionPopUpPane>
          <PopUpAction title={"Empty"}>
            <FontAwesomeIcon icon={solid("trash-can")} size="1x" color="red" />
          </PopUpAction>
        </ActionPopUpPane>
      </div>
      <TrashedShoppingBags />
    </main>
  );
};

export default Trash;
