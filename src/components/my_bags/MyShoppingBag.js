import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { getMyShoppingBagByIdService } from "../../services/MyBagService";
import { obtainDate } from "../../utils/DateUtil";
import ActionPopUpPane from "../utils/ActionPopUpPane";
import LoadingIndicator from "../utils/LoadingIndicator";
import MyShoppingBagProducts from "./MyShoppingBagProducts";
import { PopUpAction } from "../utils/PopUpAction";

const MyShoppingBag = () => {
  const [loading, setLoading] = useState(false);
  const [myshoppingBag, setMyshoppingBag] = useState(null);
  const { shoppingBagId } = useParams();

  const getMyBag = () => {
    setLoading(true);
    return async () => {
      const bag = await getMyShoppingBagByIdService(shoppingBagId);
      setMyshoppingBag(bag);
      setLoading(false);
    };
  };

  useEffect(getMyBag, [shoppingBagId]);

  return (
    <main>
      <LoadingIndicator loading={loading}>
        <div className="flex-row header-status-action">
          <div
            className="flex-row shopping-header"
            title={myshoppingBag?.description}
          >
            <p>Shopping-bag...</p>
            {myshoppingBag && (
              <div className="flex-row">
                <h1>
                  {obtainDate(myshoppingBag.dateCreated).toLocaleDateString()}
                </h1>
                <p>{myshoppingBag?.description}</p>
              </div>
            )}
          </div>
          <aside className="flex-row left">
            <div className="flex-row status">
              <p>Shopping status:</p>
              <p>{myshoppingBag ? myshoppingBag?.shoppingProcessStatus : ""}</p>
            </div>
            <ActionPopUpPane>
              <PopUpAction title={"Trash"}>
                <FontAwesomeIcon
                  icon={solid("trash-can")}
                  size="1x"
                  color={"#666"}
                />
              </PopUpAction>
              <PopUpAction title={"Delete"}>
                <FontAwesomeIcon icon={solid("trash")} size="1x" color="red" />
              </PopUpAction>
            </ActionPopUpPane>
          </aside>
        </div>
        {myshoppingBag && (
          <MyShoppingBagProducts shoppingBagId={myshoppingBag.id} />
        )}
      </LoadingIndicator>
    </main>
  );
};

export default MyShoppingBag;
